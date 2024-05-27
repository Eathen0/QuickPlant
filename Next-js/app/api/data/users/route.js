import { NextRequest, NextResponse } from "next/server";
import middlewareVerify from "@/utils/middlewareVerify";
import { sql } from "@vercel/postgres";
import env from 'dotenv'
import { cookies } from "next/headers";


env.config();

/**
 * @param {NextRequest} request 
 */
export async function GET(request) {
   const cookie = cookies();

   const __tokenAccess = cookie.get(process.env.ACCESS_TOKEN_NAME)
   const token_access = __tokenAccess && __tokenAccess.value

   try {

      if (!token_access) {
         return NextResponse.json({ message: "token not found", error: true }, { status: 401 });
      }
      
      const decodeAccess = middlewareVerify(token_access);

      if (decodeAccess) {
         const user = await sql`SELECT * FROM users WHERE id = ${decodeAccess.sub}`;
      
         return NextResponse.json({ data: user.rows[0], error: false }, { status: 200 });
      } else {
         return NextResponse.json({ message: "token is not match", error: true }, { status: 401 });
      
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, {status: 500});
   }
}

export async function DELETE (request) {
   const cookie = cookies();

   const __tokenAccess = cookie.get(process.env.ACCESS_TOKEN_NAME)
   const token_access = __tokenAccess && __tokenAccess.value

   try {

      if (!token_access) {
         return NextResponse.json({ message: "token not found", error: true }, { status: 401 });
      }
      
      const decodeAccess = middlewareVerify(token_access);

      if (decodeAccess.sub) {
         await sql`DELETE FROM users WHERE id = ${decodeAccess.sub}`;
      
         return NextResponse.json({ message: "success delete account", error: false }, { status: 200 });
      } else {
         return NextResponse.json({ message: "token is not match", error: true }, { status: 401 });
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, {status: 500});
   }
}

/**
 * 
 * @param {NextRequest} request
 */
export async function PUT (request) {
   const cookie = cookies();

   const __tokenAccess = cookie.get(process.env.ACCESS_TOKEN_NAME)
   const token_access = __tokenAccess && __tokenAccess.value

   try {

      if (!token_access) {
         return NextResponse.json({ message: "token not found", error: true }, { status: 401 });
      }
      
      const decodeAccess = middlewareVerify(token_access);

      if (decodeAccess.sub) {
         const user = await request.formData();

         const oriPassword = await sql`SELECT password FROM users WHERE id = ${decodeAccess.sub}`;
         const isPasswordMatch = await bcrypt.compare(user.get("password"), oriPassword.rows[0].password);
         if (!isPasswordMatch) {
            return NextResponse.json({ message: "password is not match", error: true }, { status: 401 });
         }

         const username      = user.get("username");
         const hash_password = await bcrypt.hash(user.get("password"), parseInt(process.env.BCRYPT_SALT));
         const namaLengkap   = user.get("namaLengkap");
         const nomorWhatsApp = user.get("nomorWhatsApp");
         const noAbsen       = user.get("noAbsen");
         const photoProfile  = user.get("photoProfile") ? user.get("photoProfile") : null;

         await sql`UPDATE users SET username = ${username}, password = ${hash_password}, nama_lengkap = ${namaLengkap}, no_whatsapp = ${nomorWhatsApp}, no_absen = ${noAbsen}, photo_profile = ${photoProfile} WHERE id = ${decodeAccess.sub}`;

         return NextResponse.json({ message: "success update account", error: false }, { status: 200 });
      } else {
         return NextResponse.json({ message: "token is not match", error: true }, { status: 401 });
      }

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ message: "something wrong in server", error: true }, {status: 500});
   }
}