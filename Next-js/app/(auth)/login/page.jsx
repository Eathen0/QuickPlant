"use client";

import Link from "next/link";
import "./style.css";

const LoginPage = () => {
	return (
		<main className="login-page">
			<div className="wrapper">
				<h1>Login</h1>
				<form action="#" method="POST">
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<div className="akun">Belum punya akun?</div>
					<br />
					<div className="btn-field">
						<Link className="btn btn-outline" href="/daftar">Daftar</Link>
						<input className="btn btn-primary" type="submit" value="Login" name="send-login" />
					</div>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;