"use client";

import "./Home.css";
import { Capriola } from "next/font/google";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView } from "framer-motion";
import Icons from "./components/icons";
import Assets from "./components/assets";
import { useRef } from "react";

const capriola = Capriola({
	subsets: ["latin"],
	weight: ["400"],
});


const Home = () => {
	const ref_whatsThis = useRef(null);
	const inView_whatThis = useInView(ref_whatsThis, { once: true });

	const ref_purpose = useRef(null);
	const inView_purpose = useInView(ref_purpose, { once: true });

	const ref_features = useRef(null);
	const inView_features = useInView(ref_features, { once: true });

	const ref_creators = useRef(null);
	const inView_creators = useInView(ref_creators, { once: true });

	const ref_technology = useRef(null);
	const inView_technology = useInView(ref_technology, { once: true });


	return (
		<LazyMotion features={domAnimation}>
			<main className="landing-page">
				<nav className={capriola.className + " nav"}>
					<div className="logo-wraper">
						<div className="hamburger-menu" />
						<img className="app-logo" src="/appLogo.svg" alt="app logo" />
					</div>

					<ul>
						<li>
							<Link href="#home">Home</Link>
						</li>
						<li>
							<Link href="#whats-this">what's-this</Link>
						</li>
						<li>
							<Link href="#purpose">purpose</Link>
						</li>
						<li>
							<Link href="#features">features</Link>
						</li>
						<li>
							<Link href="#creators">creators</Link>
						</li>
						<li>
							<Link href="#technology">technology</Link>
						</li>
					</ul>

					<div className="action-btn-wraper">
						<Link className="btn btn-primary" href="/daftar">
							daftar
						</Link>
						<Link className="btn btn-outline" href="/login">
							login
						</Link>
					</div>
				</nav>

				<main>
					<header id="home">
						<div className="content">
							<m.div
								className="hidden-on-mobile"
								initial={{ opacity: 0, translateX: '-10rem' }}
								animate={{ opacity: 1, translateX: 0}}
								transition={{ duration: 1 }}

								style={{
									top: "10em",
									left: "10em",
									rotate: "35deg",

									width: "10em",
									height: "10em",
									position: "absolute",
									border: "solid 5px var(--col-primary)",
								}}
							/>
							<m.div
								initial={{ opacity: 0, translateX: '-10rem' }}
								animate={{ opacity: 1, translateX: 0}}
								transition={{ duration: 1, ease: 'anticipate' }}
	
								style={{
									top: "18em",
									left: "-3em",
									rotate: "-25deg",

									width: "23em",
									height: "23em",
									position: "absolute",
									border: "solid 5px var(--col-secondary)",
								}}
							/>
							<m.div
								className="hidden-on-mobile"
								initial={{ opacity: 0, translateX: '20rem', rotate: '45deg'}}
								animate={{ opacity: 1, translateX: 0, rotate: '15deg'}}
								transition={{ duration: 1 }}
								
								style={{
									right: "5em",
									top: "10em",
									rotate: "15deg",

									width: "15em",
									height: "15em",
									position: "absolute",
									border: "solid 5px var(--col-third)",
								}}
							/>

							<img
								className="appLogo-title"
								src="/appLogo.svg"
								alt="app logo"
							/>
							<p>
								website yang akan{" "}
								<span className="highLight">membantu</span> semua{" "}
								<span className="highLight">anggota kelas</span> dalam
								mengingat jadwal piket dan pelajaran
							</p>
						</div>

						<div id="whats-this" className="content-2">
							<div
								style={{
									right: "12em",
									top: "11em",
									rotate: "35deg",

									width: "7em",
									height: "7em",
									position: "absolute",
									border: "solid 5px var(--col-primary)",
								}}
							/>
							<div
								className="hidden-on-mobile"
								style={{
									right: "0em",
									top: "10em",
									rotate: "-25deg",

									width: "13em",
									height: "13em",
									position: "absolute",
									border: "solid 5px var(--col-secondary)",
								}}
							/>
							<div
								className="hidden-on-mobile"
								style={{
									bottom: "5em",
									rotate: "25deg",

									width: "15em",
									height: "15em",
									position: "absolute",
									border: "solid 5px var(--col-third)",
								}}
							/>

							<div
								style={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									padding: "0 3em",
									height: "100svh",
								}}
							>
								<h1
									className={capriola.className}
									ref={ref_whatsThis}
									style={{ 
										marginBottom: "1em",

										transform: inView_whatThis? "translateX(0)" : "translateX(-5rem)",
										opacity: inView_whatThis? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out"
									}}
								>
									<span className="highLight">Apa ini?</span>
								</h1>
								<p
									style={{ 
										transform: inView_whatThis? "translateX(0)" : "translateX(-5rem)",
										opacity: inView_whatThis? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out"
									}}
								>
									QuickPlant adalah website untuk{" "}
									<span className="highLight">
										mengelola agenda-agenda kelas
									</span>
									, seperti piket kelas, jumcer, yasinan, al-barzanji,
									piket masjid dan mushola, dan piket kantin
								</p>
								<p
									style={{
										marginTop: "3em",
										alignSelf: "flex-end",
										textAlign: "right",

										transform: inView_whatThis? "translateX(0)" : "translateX(5rem)",
										opacity: inView_whatThis? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out"
									}}
								>
									Pada website QuickPlant ini siswa yang terjadwal akan
									<span className="highLight">
										{" "}
										mengirimkan foto sebagai bukti
									</span>{" "}
									bahwa siswa tersebut telah melaksanakan piket
								</p>
							</div>
						</div>
					</header>

					<section id="purpose">
						<div className="title" ref={ref_purpose}>
							<h1
								className={capriola.className}
								style={{ fontSize: "2em" }}
							>
								<span className="highLight">Tujuan</span>
							</h1>
							<p>Di buatnya website ini</p>
						</div>

						<div className="content">
							<div 
								className="item"
								style={{
									transform: inView_purpose? "translate(0, 0)" : "translate(-7rem, 7rem)",
									opacity: inView_purpose? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<div
									style={{
										background:
											"linear-gradient(-135deg, var(--col-primary), transparent 75%)",
									}}
									className="item-bg"
								/>

								<h2
									className={capriola.className}
									style={{ color: "var(--col-primary)" }}
								>
									01
								</h2>
								<p style={{ color: "var(--col-primary)" }}>
									Memudahkan siswa dalam proses absensi piket
								</p>
							</div>

							<div 
								className="item"
								style={{
									transform: inView_purpose? "translateY(0)" : "translateY(7rem)",
									opacity: inView_purpose? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<div
									style={{
										background:
											"linear-gradient(180deg, var(--col-secondary), transparent 75%)",
									}}
									className="item-bg"
								/>

								<h2
									className={capriola.className}
									style={{ color: "var(--col-secondary)" }}
								>
									02
								</h2>
								<p style={{ color: "var(--col-secondary)" }}>
									Membuat rekap piket siswa
								</p>
							</div>

							<div 
								className="item"
								style={{
									transform: inView_purpose? "translate(0, 0)" : "translate(7rem, 7rem)",
									opacity: inView_purpose? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<div
									style={{
										background:
											"linear-gradient(135deg, var(--col-third), transparent 75%)",
									}}
									className="item-bg"
								/>

								<h2
									className={capriola.className}
									style={{ color: "var(--col-third)" }}
								>
									03
								</h2>
								<p style={{ color: "var(--col-third)" }}>
									Memudahkan para pengurus dalam membagikan jadwal
									piket kelas
								</p>
							</div>
						</div>
					</section>

					<section id="features">
						<div className="title" ref={ref_features}>
							<h1
								className={capriola.className}
								style={{ fontSize: "2em" }}
							>
								<span className="highLight">Fitur</span>
							</h1>
							<p>Yang ada pada website ini</p>
						</div>

						<div className="box-container">
							<div
								className="box"
								style={{ 
									borderColor: "var(--col-third)",
									transform: inView_features? "translateX(0)" : "translateX(7rem)",
									opacity: inView_features? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out" 
								}}
							>
								<h1 className={capriola.className}>
									<span className="highLight">anggota kelas</span>
								</h1>

								<ul>
									<li>Melihat jadwal</li>
									<li>Mengirimkan foto</li>
									<li>Mengedit data personal ( username, dll )</li>
								</ul>
							</div>

							<div
								className="box"
								style={{ 
									borderColor: "var(--col-secondary)",

									transform: inView_features? "translateX(0)" : "translateX(-7rem)",
									opacity: inView_features? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<h1 className={capriola.className}>
									<span className="highLight">pengurus kelas</span>
								</h1>

								<ul>
									<li>mengirimkan jadwal</li>
									<li>Mengirimkan notifikasi</li>
									<li>Menjadwalkan piket sesuai jadwal</li>
									<li>Membuat rekap</li>
									<li>Mengedit data personal ( username, dll )</li>
								</ul>
							</div>
						</div>
					</section>

					<section id="creators">
						<div className="title" ref={ref_creators}>
							<h1
								className={capriola.className}
								style={{ fontSize: "2em" }}
							>
								<span className="highLight">Kreator</span>
							</h1>
							<p>Dibalik website ini</p>
						</div>

						<div className="content">
							<div className="group g1">
								<div
									className={"box right c1 " + capriola.className}
									style={{ 
										backgroundColor: "#D2F7FF",
										transform: inView_creators? "translateX(0)" : "translateX(-5rem)",
										opacity: inView_creators? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out"
									}}
								>
									<div className="text">
										<h1>Lidini Hanifah</h1>
										<p>nothing....</p>
										<p>birth: 17-6-2007</p>
									</div>

									<div className="links">
										<Icons.instagram width="1.4em" height="1.4em" />
										<Icons.github    width="1.4em" height="1.4em" />
										<Icons.twitter   width="1.4em" height="1.4em" />
										<Icons.tiktok    width="1.4em" height="1.4em" />
										<Icons.linkedin  width="1.4em" height="1.4em" />
										<Icons.facebook  width="1.4em" height="1.4em" />
									</div>
								</div>

								<div
									className={"box right c2 " + capriola.className}
									style={{ 
										backgroundColor: "#D9C7FF",
										transform: inView_creators? "translateX(0)" : "translateX(-5rem)",
										opacity: inView_creators? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out 300ms"
									}}
								>
									<div className="text">
										<h1>Maulida Muflihah</h1>
										<p>someone123@gmail.com</p>
										<p>birth: 17-6-2007</p>
									</div>

									<div className="links">
										<Icons.instagram width="1.4em" height="1.4em" />
										<Icons.github    width="1.4em" height="1.4em" />
										<Icons.twitter   width="1.4em" height="1.4em" />
										<Icons.tiktok    width="1.4em" height="1.4em" />
										<Icons.linkedin  width="1.4em" height="1.4em" />
										<Icons.facebook  width="1.4em" height="1.4em" />
									</div>
								</div>
							</div>

							<div className="group g2">
								<div
									className={"box left c3 " + capriola.className}
									style={{ 
										backgroundColor: "#C0CAFF",
										transform: inView_creators? "translateX(0)" : "translateX(5rem)",
										opacity: inView_creators? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out 600ms"
									}}
								>
									<div className="text">
										<h1>Fitriana Nur Oktafiani</h1>
										<p>someone123@gmail.com</p>
										<p>birth: 17-6-2007</p>
									</div>

									<div className="links">
										<Icons.instagram width="1.4em" height="1.4em" />
										<Icons.github    width="1.4em" height="1.4em" />
										<Icons.twitter   width="1.4em" height="1.4em" />
										<Icons.tiktok    width="1.4em" height="1.4em" />
										<Icons.linkedin  width="1.4em" height="1.4em" />
										<Icons.facebook  width="1.4em" height="1.4em" />
									</div>
								</div>

								<div
									className={"box left c4 " + capriola.className}
									style={{ 
										backgroundColor: "#C5E6FF",
										transform: inView_creators? "translateX(0)" : "translateX(5rem)",
										opacity: inView_creators? "1" : "0",
										transitionProperty: "transform, opacity",
										transition: "1s ease-in-out 900ms"
									}}
								>
									<div className="text">
										<h1>Muhammad Adam M.N.A</h1>
										<p>someone123@gmail.com</p>
										<p>birth: 17-6-2007</p>
									</div>

									<div className="links">
										<Icons.instagram width="1.4em" height="1.4em" />
										<Icons.github    width="1.4em" height="1.4em" />
										<Icons.twitter   width="1.4em" height="1.4em" />
										<Icons.tiktok    width="1.4em" height="1.4em" />
										<Icons.linkedin  width="1.4em" height="1.4em" />
										<Icons.facebook  width="1.4em" height="1.4em" />
									</div>
								</div>
							</div>
						</div>
					</section>

					<section id="technology">
						<div className="title">
							<h1
								className={capriola.className}
								style={{ fontSize: "2em" }}
							>
								<span className="highLight">Teknologi</span>
							</h1>
							<p>yang di gunakan pada website ini</p>
						</div>

						<div className="content" ref={ref_technology}>
							<div 
								className="item"
								style={{
									transform: inView_technology? "translateY(0)" : "translateY(7rem)",
									opacity: inView_technology? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<svg
									width="6.5em"
									height="8.5em"
									viewBox="0 0 160 157"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M29.51 133.455L18.275 9.8125H141.725L130.475 133.435L79.925 147.188L29.51 133.455Z"
										fill="#E44F26"
									/>
									<path
										d="M80 136.678L120.85 125.566L130.46 19.9243H80V136.678Z"
										fill="#F1662A"
									/>
									<path
										d="M80 65.778H59.55L58.14 50.2497H80V35.0845H41.25L41.62 39.1567L45.415 80.9432H80V65.778ZM80 105.16L79.93 105.18L62.72 100.622L61.62 88.5283H46.105L48.27 112.333L79.93 120.959L80 120.939V105.16Z"
										fill="#EBEBEB"
									/>
									<path
										d="M79.9449 65.778V80.9432H98.9749L97.1849 100.612L79.9449 105.175V120.954L111.63 112.333L111.86 109.772L115.49 69.8502L115.87 65.778H111.705H79.9449ZM79.9449 35.0845V50.2497H117.275L117.585 46.8448L118.29 39.1567L118.66 35.0845H79.9449Z"
										fill="white"
									/>
								</svg>
								<h3>HTML 5</h3>
							</div>
							<div 
								className="item"
								style={{
									transform: inView_technology? "translateY(0)" : "translateY(5rem)",
									opacity: inView_technology? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<svg
									width="6.5em"
									height="8.5em"
									viewBox="0 0 157 157"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M28.9567 133.455L17.9373 9.8125H139.063L128.029 133.435L78.4264 147.188L28.9567 133.455Z"
										fill="#1572B6"
									/>
									<path
										d="M78.5 136.678L118.584 125.566L128.014 19.9243H78.5V136.678Z"
										fill="#33A9DC"
									/>
									<path
										d="M78.5 64.7184H98.5666L99.9501 49.1901H78.5V34.0249H116.523L116.16 38.0922L112.437 79.8836H78.5V64.7184Z"
										fill="white"
									/>
									<path
										d="M78.5932 104.101L78.5245 104.12L61.6372 99.5575L60.5578 87.4636H45.3337L47.4581 111.274L78.5196 119.899L78.5932 119.879V104.101Z"
										fill="#EBEBEB"
									/>
									<path
										d="M97.2763 79.2407L95.4512 99.5477L78.5393 104.111V119.889L109.625 111.274L109.856 108.713L112.491 79.2407H97.2763Z"
										fill="white"
									/>
									<path
										d="M78.5539 34.0249V49.1901H41.9239L41.6197 45.7803L40.9279 38.0922L40.5648 34.0249H78.5539ZM78.4999 64.7184V79.8836H61.8236L61.5194 76.4738L60.8325 68.7857L60.4695 64.7184H78.4999Z"
										fill="#EBEBEB"
									/>
								</svg>

								<h3>CSS 3</h3>
							</div>

							<div 
								className="item"
								style={{
									transform: inView_technology? "translateY(0)" : "translateY(5rem)",
									opacity: inView_technology? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<svg
									width="6.5em"
									height="8.5em"
									viewBox="0 0 135 137"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M23.9246 0H112.785V45.667H68.3543L23.9246 0ZM23.9246 45.667H68.3543L112.785 91.333H68.3543V137L23.9246 91.333V45.667Z"
										fill="black"
									/>
								</svg>

								<h3>Framer Motion 11</h3>
							</div>

							<div 
								className="item"
								style={{
									transform: inView_technology? "translateY(0)" : "translateY(7rem)",
									opacity: inView_technology? "1" : "0",
									transitionProperty: "transform, opacity",
									transition: "1s ease-in-out"
								}}
							>
								<svg
									width="6.5em"
									height="8.5em"
									viewBox="0 0 143 143"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<g clipPath="url(#clip0_484_191)">
										<path
											d="M71.5 143C110.988 143 143 110.988 143 71.5C143 32.0116 110.988 0 71.5 0C32.0116 0 0 32.0116 0 71.5C0 110.988 32.0116 143 71.5 143Z"
											fill="black"
										/>
										<path
											d="M118.776 125.141L54.9287 42.8999H42.8999V100.076H52.5234V55.1208L111.22 130.96C113.865 129.19 116.389 127.246 118.776 125.141Z"
											fill="url(#paint0_linear_484_191)"
										/>
										<path
											d="M91.3613 42.8999H100.894V100.1H91.3613V42.8999Z"
											fill="url(#paint1_linear_484_191)"
										/>
									</g>
									<defs>
										<linearGradient
											id="paint0_linear_484_191"
											x1="86.5942"
											y1="92.5525"
											x2="114.797"
											y2="127.508"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="white" />
											<stop
												offset="1"
												stopColor="white"
												stopOpacity="0"
											/>
										</linearGradient>
										<linearGradient
											id="paint1_linear_484_191"
											x1="96.1276"
											y1="42.8998"
											x2="95.9679"
											y2="84.906"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="white" />
											<stop
												offset="1"
												stopColor="white"
												stopOpacity="0"
											/>
										</linearGradient>
										<clipPath id="clip0_484_191">
											<rect width="143" height="143" fill="white" />
										</clipPath>
									</defs>
								</svg>

								<h3>Next.js 14</h3>
							</div>
						</div>
					</section>
				</main>

				<footer>
					<div style={{
						position: 'absolute',
						bottom: 0,
						background: '#0065FF',
						height: '50%',
						width: '100%'
					}} />
					<Assets.svgCloud width="100%" style={{position: 'absolute', bottom: '0em'}} />
					<div style={{
						position: 'absolute',
						bottom: 0,
						backgroundImage: 'linear-gradient(0deg, #0065FF, transparent 75%)',
						height: '80%',
						width: '100%'
					}} />

					<div className="content">
						<Icons.quickPlant width='9em' height='5em' color="white" />
						<div className="line" />
						<p>©QuickPlant2024</p>
					</div>
				</footer>
			</main>
		</LazyMotion>
	);
};

export default Home;