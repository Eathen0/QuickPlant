"use client";

import Link from "next/link";
import "./style.css";
import { useEffect, useRef } from "react";
import dataLoginSchema from "@/utils/schema/dataLogin";
import { useRouter } from "next/navigation";
import { ZodError } from "zod";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCaches from "@/utils/useCaches";

const LoginPage = () => {
	const ref_label_username = useRef();
	const ref_label_password = useRef();
	const router = useRouter();
	const cache = useCaches();

	const toastyId = useRef(null);

	useEffect(() => {
		fetch("/api/auth/authorize", { method: "POST", credentials: "same-origin" })
		.then(response => {
			if (response.ok) {
				router.push("/me/dashboard")
			}
		})
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

		toastyId.current && toast.dismiss(toastyId.current);
		toastyId.current = toast.loading("Loading...", { autoClose: false, type: "info" });

		const data = {
			username: event.currentTarget.username.value,
			password: event.currentTarget.password.value
		}

		try {
			dataLoginSchema.parse(data);
			callback(null);

			const json_data = JSON.stringify(data)
			const result = await fetch("/api/auth/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: json_data
			});
			const result_data = await result.json();

			if (result.ok) {
				toast.dismiss(toastyId.current);
				cache.deleteCache("dataUser");
				router.push('/me/dashboard');
				return true;
			}

			toast.update(toastyId.current, { render: `Login Failed ${result_data.message}`, type: "error", autoClose: 3000, hideProgressBar: false});
			setTimeout(() => {
				toast.dismiss(toastyId.current);
				toastyId.current = null
			}, 5000)

		} catch (error) {
			if (error instanceof ZodError) {
				setTimeout(() => {
					toast.dismiss(toastyId.current);
					toastyId.current = null
				}, 100)
				callback(error.errors)
			}
			else {
				toast.update(toastyId.current, { render: `Login Failed ${error.message}`, type: "error", autoClose: 5000, hideProgressBar: false })
				setTimeout(() => {
					toast.dismiss(toastyId.current);
					toastyId.current = null
				}, 5000)
			}
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