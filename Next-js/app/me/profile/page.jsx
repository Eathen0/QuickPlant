"use client";

import useCaches from "@/utils/useCaches";
import "./style.css";
import { useEffect, useRef, useState } from "react";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from "next/navigation";
import { Capriola } from "next/font/google";
import Popup from "@/components/popup";

const capriola = Capriola({
	subsets: ["latin"],
	weight: ["400"],
});

const ProfilePage = () => {
	const router = useRouter();
	const cache = useCaches();
	const [dataUser, setDataUser] = useState(Object);

	const [popupCallback, setPopupCallback] = useState();
	const [showPopup, setShowPopup] = useState(false);
	const [popupDecr, setPopupDecr] = useState("");

	const toastId = useRef(null);

	useEffect(() => {
		(function getData () {
			if (!cache.getCache("dataUser")) {
				toastId.current = toast.loading("loading data user...", { autoClose: false });
				fetch("/api/data/users", { method: "GET", credentials: "same-origin" })
				.then(response => {
					if (response.status === 401) {
						fetch('/api/auth/refresh', { method: 'POST', credentials: 'same-origin' }).then(response => {
							if (response.ok) getData()
						})
					}
					return response.json()
				})
				.then(data => {
					if (data) {
						if (!data.error) {
							toast.dismiss(toastId.current)
							const dataFix = { ...data.data, leter_profile: data.data.nama_lengkap.substring(0, 2).toLowerCase() }
		
							cache.setCache("dataUser", dataFix)
							setDataUser(dataFix)
		
						} else {
							toast.update(toastId.current, { render: `error ${data.message}`, type: "error", autoClose: 5000 })
							setTimeout(() => toast.dismiss(toastId.current), 5000)
						}
					} else toast.dismiss(toastId.current)
				})
			} else {
				setDataUser(cache.getCache("dataUser"))
			}
		})()
	}, [])


	const handdleLogout = async () => {
		toastId.current = toast.loading("loading...", { autoClose: false });

		try {
			const response = await fetch("/api/auth/logout", { method: "DELETE", credentials: "same-origin"})

			if (response.ok) {
				toast.dismiss(toastId.current)
				return router.push("/login");
			} else {
				toast.update(toastId.current, { render: `error ${response.statusText}`, type: "error", autoClose: 5000 })
				setTimeout(() => toast.dismiss(toastId.current), 5000)
			}
		} catch (error) {
			toast.update(toastId.current, { render: `error ${error.message}`, type: "error", autoClose: 5000 })
			setTimeout(() => toast.dismiss(toastId.current), 5000)
		}
	}

	const handdleDelete = async () => {
		toastId.current = toast.loading("loading...", { autoClose: false });

		try {
			const response = await fetch("/api/data/users", { method: "DELETE", credentials: "same-origin"})

			if (response.ok) {
				toast.dismiss(toastId.current)
				return router.push("/home");
			} else {
				toast.update(toastId.current, { render: `error ${response.statusText}`, type: "error", autoClose: 5000 })
				setTimeout(() => toast.dismiss(toastId.current), 5000)
			}
		} catch (error) {
			toast.update(toastId.current, { render: `error ${error.message}`, type: "error", autoClose: 5000 })
			setTimeout(() => toast.dismiss(toastId.current), 5000)
		}
	}	


	return (
		<>
			<main className="profile-page">
				<Popup showHideState={[showPopup, setShowPopup]} whenYesCallback={popupCallback} title="Peringatan" description={popupDecr} />
				<div className="card">
					{dataUser.photo_profile ? 
						<img src={dataUser.photo_profile} /> :
						<div className={`leter-profile ${capriola.className}`}>{dataUser.leter_profile}</div>
					}

					<div className="content-text">
						<h1>{dataUser.nama_lengkap}</h1>
						<div className="info">
							<p>@{dataUser.username}</p> |
							<p> no.{dataUser.no_absen}</p>
						</div>
						<p>{dataUser.no_whatsapp}</p>

						<button className="btn btn-danger logout" onClick={() => {
							setPopupDecr("apakah kamu yakin ingin logout ?")
							setPopupCallback(() => handdleLogout)
							setShowPopup(true)
						}}>Logout</button>
						<button className="btn btn-danger delete" onClick={() => {
							setPopupDecr("apakah kamu yakin ingin menghapus account ?")
							setPopupCallback(() => handdleDelete)
							setShowPopup(true)
						}}>delete</button>
						<button className="btn btn-success edit">edit</button>
					</div>
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

export default ProfilePage;
