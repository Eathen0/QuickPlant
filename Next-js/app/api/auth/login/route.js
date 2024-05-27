import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

/**
 * @param {NextRequest} request 
 */
export async function POST(request) {
   const cookie = cookies();

   const url = request.url
   const { protocol, host } = new URL(url);
   const domain = `${protocol}//${host}`;

   const __cookie = cookie.get(process.env.REFRESH_TOKEN_NAME)
   const prev_refreshToken = __cookie && __cookie.value
   const originalDate = new Date()
   const localDate = new Date(originalDate.getTime() - originalDate.getTimezoneOffset() * 60000)
   
   try {
      console.log(prev_refreshToken)
      if (prev_refreshToken) {
         try {
            const result = await fetch(`${domain}/api/auth/authorize`, {body: JSON.stringify({refreshToken: prev_refreshToken}), method: 'POST', headers: {'Content-Type': 'application/json'}})
            if (result.ok) {
               const { accessToken, refreshToken } = await result.json()

               cookie.delete(process.env.REFRESH_TOKEN_NAME)
               cookie.delete(process.env.ACCESS_TOKEN_NAME)
               cookie.set(process.env.REFRESH_TOKEN_NAME, refreshToken, { httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
               cookie.set(process.env.ACCESS_TOKEN_NAME, accessToken, {httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 60 * 60 * 1000)})

               return NextResponse.json({ message: 'You are Authorized', error: false }, { status: 200 })
            }
         } catch (err) {
            console.log(err)
         }
      }

      const { username, password } = await request.json()
   
      if (!username || !password) {
         return NextResponse.json({ message: 'all field required', error: true }, { status: 400 })
      } 
      
      const refreshId = generateRandomString(10)
   
      const result = await sql`SELECT id, id_role, password FROM users WHERE username = ${username}`
      if (result.rows.length <= 0) {
         return NextResponse.json({ message: 'username not found', error: true }, { status: 400 })
      }

      const match = await bcrypt.compare(password, result.rows[0].password)
      if (!match) {
         return NextResponse.json({ message: 'password is incorect', error: true }, { status: 401 })
      }

      await sql`UPDATE users SET latest_login = ${localDate.toISOString().substring(0, 10)}, refresh_id = ${refreshId} WHERE id = ${result.rows[0].id}`


      const refreshToken = jwt.sign({idRole: result.rows[0].idRole}, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d', jwtid: refreshId, subject: String(result.rows[0].id)})
      const accessToken = jwt.sign({idRole: result.rows[0].idRole}, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h', subject: String(result.rows[0].id)})

      cookie.delete(process.env.REFRESH_TOKEN_NAME)
      cookie.delete(process.env.ACCESS_TOKEN_NAME)
      cookie.set(process.env.REFRESH_TOKEN_NAME, refreshToken, {httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)})
      cookie.set(process.env.ACCESS_TOKEN_NAME, accessToken, {httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 60 * 60 * 1000)})

      return NextResponse.json({ message: 'Successfull login', error: false }, { status: 200 })

   } catch (error) {
      console.log(error.message)
      if (error.message === 'Unexpected end of JSON input') {
         return NextResponse.json({ message: 'all field required', error: true }, { status: 400 })
      }
      return NextResponse.json({ message: 'There was an error', error: true }, { status: 500 })
   }
}

function generateRandomString(length) {
   let result = '';
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}