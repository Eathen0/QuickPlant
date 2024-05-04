"use client";

import "./style.css";

const LoginPage = () => {
	return (
		<main class="login-page">
			<div className="wrapper">
				<h1>Login</h1>
				<form action="#">
					<input type="text" placeholder="Username" />
					<input type="password" placeholder="Password" />
					<div class="akun">Belum punya akun?</div>
					<br />
					<div class="btn-field">
						<button type="button">Login</button>
						<button type="button">Daftar</button>
					</div>
				</form>
			</div>
		</main>
	);
};

export default LoginPage;
