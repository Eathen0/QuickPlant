import { sql } from "@vercel/postgres";

async function varifyToken(decoded_access, decoded_refresh) {
   try {
      if (decoded_refresh && decoded_access) { 
         const accessCode_fm_token = decoded_access.payload.sessionCode;
         const accessCode_fm_db = await sql`SELECT code FROM session_access WHERE id = ${decoded_refresh.payload.sessionId}`;      
   
         const codeIsMatch = `${accessCode_fm_db.rows[0].code}` == `${accessCode_fm_token}`

         if (codeIsMatch) {
            return true;
         }
      }
   } catch (error) {}

   return false;
}

export default varifyToken;