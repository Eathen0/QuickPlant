import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
   const cookie = cookies()
   const refreshToken = cookie.get(process.env.REFRESH_TOKEN_NAME).value

   if (!refreshToken) {
      return NextResponse.json({message: 'Unauthorized', error: true}, {status: 401})
   }

   const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, {complete: true}).payload

   if (!decoded.sub) {
      await sql`UPDATE users SET refresh_id = ${null} WHERE id = ${decoded.sub}`
      cookie.delete(process.env.REFRESH_TOKEN_NAME)
      cookie.delete(process.env.ACCESS_TOKEN_NAME)
      return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
   }

   const accessToken = jwt.sign({idRole: decoded.level}, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h', subject: decoded.sub})
   
   cookie.delete(process.env.ACCESS_TOKEN_NAME)
   cookie.set(process.env.ACCESS_TOKEN_NAME, accessToken, {httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 60 * 60 * 1000)})
   
   return NextResponse.json({message: 'Token refreshed', error: false}, {status: 200})
}