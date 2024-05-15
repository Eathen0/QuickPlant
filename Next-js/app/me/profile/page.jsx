"use client";

import useCaches from "@/utils/useCaches";
import "./style.css";
import { useEffect, useRef, useState } from "react";
import useCookie from "@/utils/useCookie";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfilePage = () => {
	const cache = useCaches();
	const [dataUser, setDataUser] = useState(Object);
	const token_access = useCookie("access_token");

	const toastId = useRef(null);

	useEffect(() => {
		if (!cache.getCache("dataUser")) {
			toastId.current = toast.loading("loading data user...", { autoClose: false });
			fetch("/api/data/users", { method: "GET", headers: { authorization: token_access.isExist() } })
			.then(response => response.json())
			.then(data => {
				if (!data.error) {
					toast.dismiss(toastId.current)
					cache.setCache("dataUser", data.data)
					setDataUser(data.data)
				} else {
					toast.update(toastId.current, { render: `error ${data.message}`, type: "error", autoClose: 5000 })
				}
			})
		} else {
			setDataUser(cache.getCache("dataUser"))
		}
	}, [])


	const handdleLogout = async () => {
		
	}


	return (
		<>
			<main className="profile-page">
				<div className="piket">
					<img src={dataUser.photo_profile} />
					<h3>{dataUser.username}</h3>
					<div className="card-container">
						<div className="card">
							<div className="card-content">
								<h3>{dataUser.nama_lengkap}</h3>
								<h3>{dataUser.no_absen}</h3>
								<h3>{dataUser.no_whatsapp}</h3>
								<button className="btn btn-primary" onClick={handdleLogout}>Logout</button>
							</div>
						</div>
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
