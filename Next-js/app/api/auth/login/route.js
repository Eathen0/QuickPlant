import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

/**
 * 
 * @param {NextRequest} request 
 */
export async function POST(request) {
   try {
      const token_refresh_fm_cookie = request.cookies.get("refresh_token");
      const token_access = request.headers['authorization'];

      
      if (token_refresh_fm_cookie && token_access) {
         // if user have token_refresh in cookie
         const decodeAccess = jwt.verify(token_access, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
         const decodedRefresh = jwt.verify(token_refresh_fm_cookie, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
         
         if (!decodedRefresh || !verifyAcessRevoking(decodeAccess, decodedRefresh)) {
            if (accessCode_fm_token !== accessCode_fm_db) {
               return NextResponse.json({ message: "token is invalid", error: true }, { status: 401 });
            }
         }

         const sessionId = decodedRefresh.payload.sessionId;


         // generate new session access code
         const sessionCode = generateAccessSession();



         const update = await sql`UPDATE session_access SET code = ${sessionCode} WHERE id = ${sessionId}`;
         if (update) {
            const access_token = jwt.sign({ username, idRole: result.rows[0].id_role, sessionCode }, process.env.JWT_SECRET, { expiresIn: '7d', algorithm: "HS256" });
            return NextResponse.json({ message: "token refreshed", token: access_token }, { status: 200 });
         }

      } else {
         // if useer not have token_refresh in cookie
         const { username, password } = await request.json();

         
         
         const result = await sql`SELECT token_refresh, password, id_role FROM users WHERE username = ${username}`;
         if (!result.rows[0]) {
            return NextResponse.json({ message: `username "${username}" is not registered in server`, error: true }, { status: 400 });
         }



         const isPasswordValid = bcrypt.compareSync(password, result.rows[0].password)
         if (isPasswordValid) {      
            const decoded = jwt.verify(result.rows[0].token_refresh, process.env.JWT_SECRET, { algorithm: "HS256", complete: true });
            const sessionId = decoded.payload.sessionId;


            // generate new session access code
            const sessionCode = generateAccessSession();

            
            
            const update = await sql`UPDATE session_access SET code = ${sessionCode} WHERE id = ${sessionId}`;
            if (update) {
               request.cookies.set("refresh_token", result.rows[0].token_refresh, { httpOnly: true, sameSite: "strict"});
               const access_token = jwt.sign({ username, idRole: result.rows[0].id_role, sessionCode }, process.env.JWT_SECRET, { expiresIn: '7d', algorithm: "HS256" });
               return NextResponse.json({ message: "success loginin", token: access_token, error: false }, { status: 200 });
            }
   
         } else {
            return NextResponse.json({ message: "password is wrong", error: true }, { status: 400 });
         }
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, {status: 500});
   }
}

const verifyAcessRevoking = async (decoded_access_token, decoded_refresh_token) => {
   const accessCode_fm_token = decoded_access_token.payload.sessionCode;
   const accessCode_fm_db = await sql`SELECT code FROM session_access WHERE id = ${decoded_refresh_token.payload.sessionId}`;

   return accessCode_fm_token !== accessCode_fm_db.rows[0].code;
}

const generateAccessSession = () => {
	let result = "";
	
	const characters = "ABC$D&EFG&H$IJKLMN_OPQRS_TUVWXY$Z_012345_67$89abc$defghij$klm_n&opqr$stuvwxyz";
	const charactersLength = characters.length;
	
	for (let counter = 0; counter < 25; counter++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};