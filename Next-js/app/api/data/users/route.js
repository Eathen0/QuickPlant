import { NextRequest, NextResponse } from "next/server";
import middlewareVerify from "@/utils/middlewareVerify";
import { sql } from "@vercel/postgres";
import jwt from "jsonwebtoken";
import env from 'dotenv'
import { cookies } from "next/headers";


env.config();

/**
 * @param {NextRequest} request 
 */
export async function GET(request) {
   const cookie = cookies();

   const token_refresh = cookie.get("refresh_token");
   const token_access = request.headers.get("authorization");

   try {

      if (!token_access || !token_refresh) {
         return NextResponse.json({ message: "token not found", error: true }, { status: 401 });
      }
      
      const decodedAccess = jwt.verify(token_access, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
      const decodedRefresh = jwt.verify(token_refresh.value, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });

      const isCodeMatch = await middlewareVerify(decodedAccess, decodedRefresh);

      if (isCodeMatch) {
         const user = await sql`SELECT * FROM users WHERE username = ${decodedAccess.payload.username}`;
      
         return NextResponse.json({ data: user.rows[0], error: false }, { status: 200 });
      } else {
         return NextResponse.json({ message: "token is not match", error: true }, { status: 401 });
      
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "falied to get user data", error: true }, {status: 400});
   }
}