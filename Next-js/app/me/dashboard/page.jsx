"use client"

import useCaches from '@/utils/useCaches';
import './style.css'
import { useEffect, useRef, useState } from 'react';

import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Capriola } from 'next/font/google';
import Link from 'next/link';


const capriola = Capriola({
	subsets: ["latin"],
	weight: ["400"],
});

const Dashboard = () => {
   const date = new Date();
   
   const cache = useCaches();
	const [dataUser, setDataUser] = useState(Object);
   const [clock, setClock] = useState(date.toTimeString().substring(0, 5));
   
	const toastId = useRef(null);
   
	useEffect(() => {
      setInterval(() => {
         const date = new Date();
         setClock(date.toTimeString().substring(0, 5));
      }, 1000);

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
					if (!data.error) {
						toast.dismiss(toastId.current)
						const dataFix = { ...data.data, leter_profile: data.data.nama_lengkap.substring(0, 2).toLowerCase() }

						cache.setCache("dataUser", dataFix)
						setDataUser(dataFix)
					} else {
						toast.update(toastId.current, { render: `error ${data.message}`, type: "error", autoClose: 5000})
						setTimeout(() => toast.dismiss(toastId.current), 50000);
					}
				})
			} else {
				setDataUser(cache.getCache("dataUser"))
			}
		})()
	}, [])

   return (
      <>
         <main className={`dashboard-page ${capriola.className}`}>
            <h1>Selamat Datang <span>{dataUser.username}</span></h1>

            <div className="container">
               <div className="list-jadwal">
						<div className="title-box">
							<h1>Kamu Terjadwal :</h1>

							<ul>
								<li>
									<span>Piket Kantin  |  08:00 - 09:00</span>
									<button className='btn btn-primary'>Selesai</button>
								</li>
								<li>
									<span>Piket Kantin  |  08:00 - 09:00</span>
									<button className='btn btn-primary'>Selesai</button>
								</li>
							</ul>
						</div>

						<div className="item i1">
							<h1>Jadwal Piket Masjid / Mushola</h1>
							<Link href='/me/jadwal/Piket_Masjid_Mushola' className='btn btn-primary'>Lihat</Link>
						</div>
						<div className="item i2">
							<h1>Jadwal Piket Kelas</h1>
							<Link href='/me/jadwal/Piket_Kelas' className='btn btn-primary'>Lihat</Link>
						</div>
						<div className="item i3">
							<h1>Jadwal Al-Barzanji</h1>
							<Link href='/me/jadwal/Al-Barzanji' className='btn btn-primary'>Lihat</Link>
						</div>
						<div className="item i4">
							<h1>Jadwal Piket Kantin</h1>
							<Link href='/me/jadwal/Piket_Kantin' className='btn btn-primary'>Lihat</Link>
						</div>
						<div className="item i5">
							<h1>Jadwal Jumcer</h1>
							<Link href='/me/jadwal/Jumcer' className='btn btn-primary'>Lihat</Link>
						</div>
						<div className="item i6">
							<h1>Jadwal Pelajaran</h1>
							<Link href='/me/jadwal/Pelajaran' className='btn btn-primary'>Lihat</Link>
						</div>
               </div>

               <div className="digital-clock">
                  <h1>{clock}</h1>
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
   )
}

export default Dashboard