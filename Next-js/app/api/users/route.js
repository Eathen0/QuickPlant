import { sql } from "@vercel/postgres";
import bcrypt from "bcrypt";
import multer from "multer";

import mv from "mv";
import path from "path";

export const config = {
	api: {
		externalResolver: true,
		bodyParser: false,
	},
};

const randomString = (length) => {
	const chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	let result = "";
	for (let i = length; i > 0; --i) {
		result += chars[Math.floor(Math.random() * chars.length)];
	}
	return result;
};

// Set up multer storage
const storage = multer.diskStorage({
	destination: "/public/photoProfile",
	filename: (req, file, cb) => {
		const fileName = `${randomString(10)}${path.extname(file.originalname)}`;
		cb(null, fileName);
	},
});
const upload = multer({ storage });

export async function GET(request) {
	try {
		const { rows } = await sql`SELECT * FROM users`;
		console.log("query success");
		return new Response(JSON.stringify({ result: rows }), { status: 200 });
	} catch (error) {
		console.log("query error");
		console.log(error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}

export async function POST(request, res) {
	const { headers, body } = request;
	const requestBody = {
		username: null,
		password: null,
		nama_lengkap: null,
		no_whatsapp: null,
		photo_profile: null,
		no_absen: null,
		role: 2,
	};

	const test = new Request()
	test.formData().then((data) => {
      data.
   })

	try {
      let isUploadError = false
      let filePath = null

		upload.single("image")(request, res, (err) => {
			if (err instanceof multer.MulterError) {
				// Multer error
				console.error("Multer error:", err);
            isUploadError = true
			} else if (err) {
            // Other error
				console.error("Error uploading file:", err);
            isUploadError = true
			} else {
				// File uploaded successfully
				// filePath = request.file.path.replace("public", "");
			}
		});

      if (isUploadError) {
         return new Response(JSON.stringify({ error: "Error uploading file" }), {
            status: 500,
         });
      }

      return new Response(JSON.stringify({ message: "File uploaded successfully" }), { status: 200 });
	} catch (error) {
		console.error("Error uploading file:", error);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}

	// request.formData().then((data) => {
	//    Object.entries(requestBody).forEach(([key, _]) => requestBody[key] = data.get(key))

	//    bcrypt
	//       .hash(requestBody.password, 10)
	//       .then((hash) => {
	//          requestBody.password = hash
	//       })
	//       .catch((error) => {
	//          console.log(error)
	//       })

	//    sql(`
	//       INSERT INTO users (username, password, nama_lengkap, no_whatsapp, photo_profile, no_absen) VALUES
	//       ('${requestBody.username}', '${requestBody.password}', '${requestBody.nama_lengkap}',
	//       '${requestBody.no_whatsapp}', '${requestBody.photo_profile}', '${requestBody.no_absen}')`
	//    ).then(() => {
	//       console.log("query success");
	//       return new Response(
	//          JSON.stringify({ message: "data user berhasil di tambahkan" }),
	//          { status: 200 }
	//       );
	//    })
	// })
}
