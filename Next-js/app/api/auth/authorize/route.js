import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

env.config();

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
   const cookie = cookies();

   const originalDate = new Date()
   const localDate = new Date(originalDate.getTime() - originalDate.getTimezoneOffset() * 60000)
   
   try {
      const __prevRefresh = cookie.get(process.env.REFRESH_TOKEN_NAME)
      let prev_refreshToken = __prevRefresh && __prevRefresh.value
      try {
         prev_refreshToken = (await request.json()).refreshToken
      } catch {}
      
      if (!prev_refreshToken) {
         return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
      } 
      
      const decoded = jwt.verify(prev_refreshToken, process.env.JWT_REFRESH_SECRET, {complete: true}).payload
      if (!decoded.sub) {
         return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
      }


      const result = await sql`SELECT refresh_id FROM users WHERE refresh_id = ${decoded.jti}`

      if (result.rows.length <= 0) {
         await sql`UPDATE users SET refresh_id = ${null} WHERE id = ${decoded.sub}`
         cookie.delete(process.env.REFRESH_TOKEN_NAME)
         cookie.delete(process.env.ACCESS_TOKEN_NAME)
         return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
      }

      const refreshId = generateRandomString(10)

      await sql`UPDATE users SET latest_login = ${localDate.toISOString().substring(0, 10)}, refresh_id = ${refreshId} WHERE id = ${decoded.sub}`

      const refreshToken = jwt.sign({idRole: decoded.idRole}, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d', jwtid: refreshId, subject: decoded.sub})
      const accessToken = jwt.sign({idRole: decoded.idRole}, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h', subject: decoded.sub})

      cookie.delete(process.env.REFRESH_TOKEN_NAME)
      cookie.delete(process.env.ACCESS_TOKEN_NAME)
      cookie.set(process.env.REFRESH_TOKEN_NAME, refreshToken, { httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
      cookie.set(process.env.ACCESS_TOKEN_NAME, accessToken, {httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 60 * 60 * 1000)})

      return NextResponse.json({ message: 'You are Authorized', error: false, refreshToken, accessToken }, { status: 200 })
   } catch (error) {
      console.log(error)
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