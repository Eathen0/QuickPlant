import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "@vercel/postgres";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

env.config();

/**
 * @param {NextRequest} request 
 */
export async function DELETE(request) {
   const cookie = cookies();

   const __refToken = cookie.get(process.env.REFRESH_TOKEN_NAME)
   const refreshToken = (__refToken && __refToken.value) || headers().get('authorization')

   try {

      if (!refreshToken) {
         return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
      }

      const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET, {complete: true}).payload

      if (!decoded.sub) {
         return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
      }

      await sql`UPDATE users SET refresh_id = ${null} WHERE refresh_id = ${decoded.jti}`

      cookie.delete(process.env.REFRESH_TOKEN_NAME)
      cookie.delete(process.env.ACCESS_TOKEN_NAME)
      return NextResponse.json({ message: 'You are logged out', error: false }, { status: 200 })

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, { status: 500 });
   }
}