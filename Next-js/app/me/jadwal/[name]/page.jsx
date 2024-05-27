"use client"

import NotFound from "@/not-found";
import "./style.css";
import { useEffect, useRef, useState } from "react";

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCaches from "@/utils/useCaches";

const listJadwal = {
	"Piket_Masjid_Mushola": {
      title: "Piket Masjid/Mushola",
   },
	"Piket_Kelas": {
      title: "Piket Kelas",
   },
	"Al-Barzanji": {
      title: "Al-Barzanji",
   },
	"Yasinan": {
		title: "Yasinan",
	},
	"Piket_Kantin": {
      title: "Piket Kantin",
   },
	"Jumcer": {
      title: "Jumcer",
   },
	"Pelajaran": {
      title: "Pelajaran",
   },
};



const Jadwal = ({ params }) => {
   const [currentJadwal, _] = useState(listJadwal[params.name]);
	const [isLoading, setIsLoading] = useState(true);
	const [dataJadwal, setDataJadwal] = useState(Object);
	const cache = useCaches();

	const toastId = useRef(null);

	useEffect(() => {
		if (Object.keys(listJadwal).includes(params.name)) {
			if (params.name !== "Pelajaran") {
				(async function getData () {
					if (!cache.getCache("dataJadwal")) {
						try {
							toastId.current = toast.loading("loading data jadwal...", { autoClose: false });
							await fetch("/api/jadwal", { body: JSON.parse({name: params.name}), method: "GET", credentials: "same-origin" })
							.then(response => {
								if (response.status === 401) {
									fetch('/api/auth/refresh', { method: 'POST', credentials: 'same-origin' }).then(response => {
										if (response.ok) getData()
									})
								}
								return response.json()
							})
							.then(data => {
								if (!data.error) {
									toast.dismiss(toastId.current);
									cache.setCache("dataJadwal", data.data);
									setDataJadwal(data.data);
									setIsLoading(false);
								} else {
									toast.update(toastId.current, { render: `error ${data.message}`, type: "error", autoClose: 5000 })
									setTimeout(() => toast.dismiss(toastId.current), 5000)
								}
							})
						} catch (error) {
							setIsLoading(false);
							toast.update(toastId.current, { render: `error ${error.message}`, type: "error", autoClose: 5000 })
							setTimeout(() => toast.dismiss(toastId.current), 5000)
						}
					} else {
						setDataJadwal(cache.getCache("dataJadwal"));
						setIsLoading(false);
					}
				})()
			}
		}
	}, [])

	return Object.keys(listJadwal).includes(params.name) ? (
		<main className="jadwal-page">
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

			<div className="piket">
				<img src="/assets/pelajaran.jpg" />
				<br />
				<h1>Jadwal {currentJadwal.title}</h1>

				<div className="content">
					{params.name === "Pelajaran" ? (
						<>
							<div className="box">
								<p>Jadwal Pelajaran Umum</p>
								<button className="btn btn-primary">
									<a href="pelajaranUmum.html">Lihat</a>
								</button>
							</div>
							<div className="box">
								<p>Jadwal Pelajaran Kejuruan</p>
								<button className="btn btn-primary">
									<a href="pelajaranKejuruan.html">Lihat</a>
								</button>
							</div>
						</>
					) : (
						<>
							{!isLoading ? (
								<></>
							) : (
								<div 
									style={{
										position: "absolute",
										width: "100%",
										height: "100vh",
										display: "flex",
										flexDirection: "column",
										justifyContent: "center",
										alignItems: "center"
									}}
								>
									<div 
										style={{
											fontSize: "4em",
											color: "transparent",
											WebkitBackgroundClip: "text",
											backgroundClip: "text",
											backgroundImage: "linear-gradient(#0029FF, #ABF0FF)"
										}}
									>
										<span>Loading...</span>
									</div>
									<h3 style={{ opacity: 0.5 }}>Mohon Tunggu Sebentar.</h3>
								</div>
							)}
						</>
					)}
				</div>
			</div>
		</main>
	) : (
		<NotFound />
	);
};

export default Jadwal;
