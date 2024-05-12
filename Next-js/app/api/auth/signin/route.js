import { sql } from "@vercel/postgres";
import { put } from "@vercel/blob";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { ROLE_SISWA } from "@/utils/apiMetaData";
import jwt from "jsonwebtoken";
import env from "dotenv";


env.config();


export async function POST(request) {
	try {
		// USER DATA'S
		const user = await request.formData();

		const username      = user.get("username");
		const hash_password = await bcrypt.hash(user.get("password"), 10);
		const namaLengkap   = user.get("namaLengkap");
		const nomorWhatsApp = user.get("nomorWhatsApp");
		const photoProfile  = user.get("photoProfile");
		const noAbsen       = user.get("noAbsen");

		const idRole = ROLE_SISWA;



		// validating username
		const usernameResult = await sql`SELECT username FROM users WHERE username = ${username}`;
		if (usernameResult.rows[0]) {
			return NextResponse.json(
				{ 
					message: "username is already taken",
					error: true
				},
				{ status: 400 }
			);
		}

		
		
		// ---SESSION ACCESS CODE---
		const sessionAccessCode = generateAccessSession();



		// JWT ---REFRESH TOKEN--- SIGN
		const insert = await sql`INSERT INTO session_access (id, code) VALUES(DEFAULT, ${sessionAccessCode})`;
		if (insert) {
			const result = await sql`SELECT id FROM session_access WHERE code = ${sessionAccessCode}`;
			var refresh_token = jwt.sign({ sessionId: result.rows[0].id }, process.env.JWT_SECRET, { algorithm: "HS256" });
		}



		// JWT ---ACCESS TOKEN--- SIGN
		let access_token = jwt.sign({ username, idRole, sessionAccessCode }, process.env.JWT_SECRET, { expiresIn: '7d', algorithm: "HS256" });



		// ---UPLOAD PHOTO PROFILE---
		if (photoProfile) {
			var fileUrl = (await put(generateFileName(photoProfile), photoProfile, { access: 'public' })).url
		}



		// ---INSERT USER DATA---
		const registerResult = await sql`INSERT INTO users (id, username, password, nama_lengkap, no_whatsapp, photo_profile, no_absen, id_role, token_refresh) VALUES (DEFAULT, ${username}, ${hash_password}, ${namaLengkap}, ${nomorWhatsApp}, ${fileUrl}, ${noAbsen}, ${idRole}, ${refresh_token})`



		// RESPONSE
		if (refresh_token && access_token && registerResult) {
			request.cookies.set("refresh_token", refresh_token, { httpOnly: true, sameSite: "strict"});

			return NextResponse.json(
				{
					message: "You Has Been Registered",
					token: access_token,
					error : false
				},
				{ status: 201 }
			);
		} else {
			return NextResponse.json(
				{ 
					message: "some data is missing",
					error: true
				},
				{ status: 400 }
			);
		}

	} catch (error) {
		console.log(error.message);
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
	
	for (let counter = 0; counter < 25; counter++) {
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