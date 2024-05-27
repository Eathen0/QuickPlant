import { cookies } from "next/headers";
import env from 'dotenv';
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

env.config()

export function POST (request) {
   const cookie = cookies()

   const __cookie = cookie.get(process.env.ACCESS_TOKEN_NAME)
   const accessToken = __cookie && __cookie.value

   if (!accessToken) {
      return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
   }

   const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET, {complete: true}).payload

   if (!decoded.sub) {
      return NextResponse.json({ message: 'Unauthorized', error: true }, { status: 401 })
   }

   return NextResponse.json({ message: 'Authorized', error: false }, { status: 200 })
}