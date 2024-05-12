import jwt from "jsonwebtoken";
import env from "dotenv";
import { sql } from "@vercel/postgres";

env.config();

export async function POST(request) {
   try {
      
      const access_token_decoded = jwt.verify(request.headers['authorization'], process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
      const refresh_token_decoded = jwt.verify(request.cookies.get("refresh_token"), process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
      
      if (!access_token_decoded || !refresh_token_decoded) {
         return NextResponse.json({ message: "token is invalid", error: true }, { status: 401 });
      }
      
      const empty = sql`UPDATE session_access SET code = ${""} WHERE id = ${refresh_token_decoded.payload.sessionId}`;
      
      
      if (empty) {
         request.cookies.delete("refresh_token");
         return NextResponse.json({ message: "success logout", error: false }, { status: 200 });  
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, { status: 500 });
   }
}