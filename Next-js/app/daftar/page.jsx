"use client";

import InputImage from "../components/inputImage";
import "../login/style.css";
import Link from "next/link";

const Daftar = () => {
	return (
		<main className="login-page">
			<div className="wrapper">
				<form action="#">
               <h1>Daftar</h1>

					<div className="input-foto">
						<InputImage
							name="photoProfile"
							style={{
								background: "transparent",
								border: "solid 2px grey",
                        width: "10em",
                        height: "10em",
							}}
						>
							<span>photo profile</span>
						</InputImage>
					</div>

					<input name="namaLengkap" type="text" placeholder="nama lengkap" />
					<input name="username" type="text" placeholder="username" />
					<input name="password" type="password" placeholder="password" />
					<input name="noWhatsApp" type="text" placeholder="no whatsApp" />
					<input name="noAbsen" type="text" placeholder="no absen" />

					<div className="action">
						<p>
							Sudah punya akun?{" "}
							<Link href="/login" className="link">
								login
							</Link>
						</p>
						<input
							type="submit"
							value="Daftar"
							name="daftar"
							className="btn btn-primary"
						/>
					</div>
				</form>
			</div>
		</main>
	);
};

export default Daftar;
