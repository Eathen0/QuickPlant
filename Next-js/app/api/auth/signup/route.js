import { sql } from "@vercel/postgres";
import { put } from "@vercel/blob";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import env from "dotenv";
import { cookies } from "next/headers";


env.config();


export async function POST(request) {
	const originalDate = new Date()
   const localDate = new Date(originalDate.getTime() - originalDate.getTimezoneOffset() * 60000)
	const cookie = cookies();

	try {
		// USER DATA'S
		const user = await request.formData();

		const username      = user.get("username");
		const hash_password = await bcrypt.hash(user.get("password"), parseInt(process.env.BCRYPT_SALT));
		const namaLengkap   = user.get("namaLengkap");
		const nomorWhatsApp = user.get("nomorWhatsApp");
		const noAbsen       = user.get("noAbsen");
		const photoProfile  = user.get("photoProfile") ? user.get("photoProfile") : null;

		const idRole = process.env.ROLE_SISWA;



		// ---UPLOAD PHOTO PROFILE---
		if (photoProfile) {
			var fileUrl = (await put(generateFileName(photoProfile), photoProfile, { access: 'public' })).url
		}


		const refreshId = generateAccessSession();


		// ---INSERT USER DATA---
		const registerResult = await sql`INSERT INTO users (id, username, password, nama_lengkap, no_whatsapp, photo_profile, no_absen, id_role, refresh_id, latest_login) VALUES 
			(DEFAULT, ${username}, ${hash_password}, ${namaLengkap}, ${nomorWhatsApp}, ${fileUrl}, ${noAbsen}, ${idRole}, ${refreshId}, ${localDate.toISOString().substring(0, 10)}) RETURNING id`


		// RESPONSE
		const refreshToken = jwt.sign({idRole}, process.env.JWT_REFRESH_SECRET, {expiresIn: '7d', jwtid: refreshId, subject: String(registerResult.rows[0].id)})
		const accessToken = jwt.sign({idRole}, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h', subject: String(registerResult.rows[0].id)})

		cookie.set(process.env.REFRESH_TOKEN_NAME, refreshToken, { httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });
		cookie.set(process.env.ACCESS_TOKEN_NAME, accessToken, { httpOnly: true, secure: true, sameSite: 'none', expires: new Date(Date.now() + 60 * 60 * 1000) })


		return NextResponse.json(
			{
				message: "You Has Been Registered",
				error : false,
			},
			{ status: 201 }
		);

	} catch (error) {
		console.log(error.message);
		if (error.code == '23505') {
			return NextResponse.json(
				{ 
					message: "username is already taken",
					error: true
				},
				{ status: 400 }
			);
		}
		return NextResponse.json(
			{ 
				message: "something wrong in server",
				error: true
			},
			{ status: 500 }
		);
	}
}



const generateAccessSession = () => {
	let result = "";
	
	const characters = "ABC$D&EFG&H$IJKLMN_OPQRS_TUVWXY$Z_012345_67$89abc$defghij$klm_n&opqr$stuvwxyz";
	const charactersLength = characters.length;
	
	for (let counter = 0; counter < 15; counter++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

const generateFileName = (file) => {
	const extension = file.type.split("/")[1];
	const randomString = Math.random().toString(36).substring(2, 7);
	const dateNow = Date.now().toString();
	
	return `/userAvatars/avatar-${dateNow.substring(
		dateNow.length - 6,
		dateNow.length - 1
	)}${randomString}.${extension}`;
};