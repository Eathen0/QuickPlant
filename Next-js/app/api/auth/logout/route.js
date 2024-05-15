import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "@vercel/postgres";
import { cookies } from "next/headers";

env.config();

export async function POST(request) {
   const cookie = cookies();

   try {
      const access_token_decoded = jwt.verify(request.headers['authorization'], process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
      const refresh_token_decoded = jwt.verify(cookie.get("refresh_token").value, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
      
      if (!access_token_decoded || !refresh_token_decoded) {
         return NextResponse.json({ message: "token is invalid", error: true }, { status: 401 });
      }
      
      const empty = sql`UPDATE session_access SET code = ${""} WHERE id = ${refresh_token_decoded.payload.sessionId}`;
      const setIslogin = sql`UPDATE users SET islogin = false WHERE username = ${access_token_decoded.payload.username}`;
      
      if (empty && setIslogin) {
         cookie.delete("refresh_token");
         return NextResponse.json({ message: "success logout", error: false }, { status: 200 });  
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, { status: 500 });
   }
}