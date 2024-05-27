"use client";

import dataSignupSchema from "@/utils/schema/dataSignup";
import InputImage from "../../components/inputImage";
import "./style.css";
import Link from "next/link";
import { useRef } from "react";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCaches from "@/utils/useCaches";


const Daftar = () => {
	const ref_label_namaLengkap = useRef();
	const ref_label_username = useRef();
	const ref_label_password = useRef();
	const ref_label_nomorTelepone = useRef();
	const ref_label_noAbsen = useRef();
	const router = useRouter();
	const cahce = useCaches();

	const toastyId = useRef(null);

	/**
	 * @param {Array | null} errorMessageStack 
	 */
	const oninvalid = (errorMessageStack) => {
		ref_label_namaLengkap.current.style.color = "green";
		ref_label_username.current.style.color = "green";
		ref_label_password.current.style.color = "green";
		ref_label_nomorTelepone.current.style.color = "green";
		ref_label_noAbsen.current.style.color = "green";
		
		ref_label_namaLengkap.current.innerText = "Nama Lengkap";
		ref_label_username.current.innerText = "Username";
		ref_label_password.current.innerText = "Password";
		ref_label_nomorTelepone.current.innerText = "Nomor Telepon";
		ref_label_noAbsen.current.innerText = "Nomor Absen";
		
		
		if (errorMessageStack) {
			errorMessageStack.forEach((stackObject) => {
				switch (stackObject.path[0]) {
					case "namaLengkap":
						ref_label_namaLengkap.current.style.color = "red";
						ref_label_namaLengkap.current.innerText = stackObject.message;
						break;
						
					case "username":
						ref_label_username.current.innerText = stackObject.message;
						ref_label_username.current.style.color = "red";
						break;
						
					case "password":
						ref_label_password.current.innerText = stackObject.message;
						ref_label_password.current.style.color = "red";
						break;
						
					case "nomorWhatsApp":
						ref_label_nomorTelepone.current.innerText = stackObject.message;
						ref_label_nomorTelepone.current.style.color = "red";
						break;
						
					case "noAbsen":
						ref_label_noAbsen.current.innerText = stackObject.message;
						ref_label_noAbsen.current.style.color = "red";
						break;
				}
			})
		}
	}

	/**
	 * @param {import("react").FormEvent} event
	 * @param {Function} callback
	 */
	const handdleSubmit = async (event, callback) => {
		event.preventDefault();

		toastyId.current && toast.dismiss(toastyId.current)

		toastyId.current = toast.loading("Loading...", { autoClose: false, type: "info" });

		const data = {
			namaLengkap: event.currentTarget.namaLengkap.value,
			username: event.currentTarget.username.value,
			password: event.currentTarget.password.value,
			nomorWhatsApp: event.currentTarget.nomorTelepone.value,
			noAbsen: event.currentTarget.noAbsen.value,
		};
		console.log('sumited')
		
		try {
			// VALIDATE THE DATA
			dataSignupSchema.parse(data);
			callback(null);
			
			const formdata = new FormData();
			formdata.append("photoProfile", event.currentTarget.photoProfile ? event.currentTarget.photoProfile.files[0] : null);
			Object.entries(data).forEach(([key, value]) => {
				formdata.append(key, value);
			})

			const result = await fetch("/api/auth/signup", {
				method: "POST",
				body: formdata,
			})

			const result_data = await result.json();
			
			if (result.ok) {
				toast.dismiss(toastyId.current);
				cache.deleteCache("dataUser")
				router.push('/me/dashboard')
				return true;
			}

			toast.update(toastyId.current, { render: `Signup Failed ${result_data.message}`, type: "error", autoClose: 3000, hideProgressBar: false});
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
				callback(error.errors);
			} else {
				toast.update(toastyId.current, { render: `Signup Failed ${error.message}`, type: "error", autoClose: 3000, hideProgressBar: false});
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
					<form onSubmit={(ev) => handdleSubmit(ev, oninvalid)}>
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
								<span>photo profile (optional)</span>
							</InputImage>
						</div>

						<div className="inp_container">
							<label ref={ref_label_namaLengkap} htmlFor="namaLengkap">Nama Lengkap</label>
							<input name="namaLengkap" type="text" placeholder="nama lengkap" />
						</div>

						<div className="inp_container">
							<label ref={ref_label_username} htmlFor="username">Username</label>
							<input name="username" type="text" placeholder="username" />
						</div>

						<div className="inp_container">
							<label ref={ref_label_password} htmlFor="password">Password</label>
							<input name="password" type="password" placeholder="password" />
						</div>

						<div className="inp_container">
							<label ref={ref_label_nomorTelepone} htmlFor="nomorTelepone">Nomor Telepon</label>
							<input name="nomorTelepone" type="text" placeholder="no whatsApp" />
						</div>

						<div className="inp_container">
							<label ref={ref_label_noAbsen} htmlFor="noAbsen">Nomor Absen</label>
							<input name="noAbsen" type="text" placeholder="no absen" />
						</div>

						<div className="action">
							<p>
								Sudah punya akun?
								<Link href="/login" className="link">
									login
								</Link>
							</p>
							<input
								type="submit"
								value="Daftar"
								name="send-daftar"
								className="btn btn-primary"
							/>
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

export default Daftar;
