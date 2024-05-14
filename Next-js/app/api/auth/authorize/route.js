import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

env.config();

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
   // const { token_refresh, token_access } = await request.json();
   const token_refresh = request.cookies.get("refresh_token");
   const token_access = request.headers.get("authorization");


   try {
      if (token_refresh && token_access) {
         const decodedAccess = jwt.verify(token_access, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
         const decodedRefresh = jwt.verify(token_refresh, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
   
         const accessCode_fm_token = decodedAccess.payload.sessionCode;
         const accessCode_fm_db = await sql`SELECT code FROM session_access WHERE id = ${decodedRefresh.payload.sessionId}`;      
   
         const codeIsMatch = `${accessCode_fm_db.rows[0].code}` == `${accessCode_fm_token}`

         if (codeIsMatch) {
            return NextResponse.json({ codeIsMatch, userLevel: decodedAccess.payload.idRole }, { status: 200 });
         } else {
            return NextResponse.json({ codeIsMatch: false, userLevel: null }, { status: 401 });
         }
      }

      return NextResponse.json({ codeIsMatch: false, userLevel: null }, { status: 401 });
   } catch (error) {
      return NextResponse.json({ codeIsMatch: false, userLevel: null }, { status: 500 });
   }
}