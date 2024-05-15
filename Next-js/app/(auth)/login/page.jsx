"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useRef } from "react";
import dataLoginSchema from "@/utils/schema/dataLogin";
import { useRouter } from "next/navigation";
import useCaches from "@/utils/useCaches";
import useCookie from "@/utils/useCookie";
import { ZodError } from "zod";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
	const ref_label_username = useRef();
	const ref_label_password = useRef();
	const router = useRouter();

	const toastyId = useRef(null);

	
	useEffect(() => {
		const cache = useCaches();
		const refresh_token = useCookie("refresh_token").isExist();
		const access_token = useCookie("access_token").isExist();
		
		if (!cache.getCache("userLevel") && access_token && refresh_token) {
			console.log("not have cahce")

			if (!sessionStorage.getItem("session")) {

				fetch("/api/auth/authorize", { method: "POST", headers: { authorization: access_token } })
				.then(response => response.json())
				.then(data => {
					if (!data.codeIsMatch) {
						sessionStorage.setItem("session", btoa("the user level is : " + data.userLevel))
						cache.setCache("userLevel", data.userLevel)
						router.push("/me/dashboard");
					}
				})
			} else {
				try {
					const raw_decodedLevel = atob(sessionStorage.getItem("session"))
					const userLevel = raw_decodedLevel.charAt(raw_decodedLevel.length - 1)
		
					if (!isNaN(parseInt(userLevel))) {
						router.push("/me/dashboard");
					}
				} catch (error) {}
			}
		} else if (cache.getCache("userLevel")) {
			router.push("/me/dashboard");
		}

		console.log('end')
	}, [])


	/**
	 * @param {Array} errorStack
	 */
	const validatingInput = (errorStack) => {
		ref_label_username.current.style.color = "green";
		ref_label_password.current.style.color = "green";

		ref_label_username.current.innerText = "Username";
		ref_label_password.current.innerText = "Password";

		if (errorStack) {
			errorStack.forEach((stackObject) => {
				switch (stackObject.path[0]) {
					case "username":
						ref_label_username.current.innerText = stackObject.message;
						ref_label_username.current.style.color = "red";
						break;

					case "password":
						ref_label_password.current.innerText = stackObject.message;
						ref_label_password.current.style.color = "red";
						break;
				}
			});
		}
	}

	
	/**
	 * @param {import("react").FormEvent} event
	 * @param {Function} callback
	 */
	const handdleSubmit = async (event, callback) => {
		event.preventDefault();

		toastyId.current = toast.loading("Loading...", { autoClose: false, type: "info" });
		
		const cache = useCaches();
		const cookie_access = useCookie("access_token");

		console.log('sumited')

		const data = {
			username: event.currentTarget.username.value,
			password: event.currentTarget.password.value
		}

		try {
			dataLoginSchema.parse(data);
			callback(null);

			const json_data = JSON.stringify(data);

			const result = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: json_data
			});
			const result_data = await result.json();

			if (result.ok) {
				cookie_access.updateDataAndExpires(result_data.token, { expires: 7 });
				sessionStorage.setItem("session", btoa("the user level is : " + result_data.userLevel))
				cache.setCache("userLevel", result_data.userLevel)

				toast.dismiss(toastyId.current);

				router.push('/me/dashboard');
				return true;
			}

			toast.update(toastyId.current, { render: `Login Failed ${result_data.message}`, type: "error", autoClose: 5000 });

		} catch (error) {
			if (error instanceof ZodError) return callback(error.errors);
			toast.update(toastyId.current, { render: `Login Failed ${error.message}`, type: "error", autoClose: 5000 });
		}
	}

	return (
		<>
			<main className="login-page">
				<div className="wrapper">
					<h1>Login</h1>
					<form action="#" onSubmit={(ev) => handdleSubmit(ev, validatingInput)}>
						<div className="inp_container">
							<label ref={ref_label_username} htmlFor="username">Username</label>
							<input type="text" name="username" placeholder="username" />
						</div>

						<div className="inp_container">
							<label ref={ref_label_password} htmlFor="password">Password</label>
							<input type="password" name="password" placeholder="Password" />
						</div>
						<div className="akun">Belum punya akun?</div>
						<br />
						<div className="btn-field">
							<Link className="btn btn-outline" href="/daftar">Daftar</Link>
							<input className="btn btn-primary" type="submit" value="Login" name="send-login" />
						</div>
					</form>
				</div>
			</main>

			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Bounce}
			/>
		</>
	);
};

export default LoginPage;