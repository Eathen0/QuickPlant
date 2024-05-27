"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		try {
			fetch('/api/auth/authorize', { method: 'POST', credentials: 'same-origin' }).then(response => {
				if (response.ok) {
					router.push('/me/dashboard')
				} else {
					router.push('/home')
				}
			})
		} catch (error) {
			console.log(error)
		}
	}, []);

	return (
		<div 
			style={{
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
	);
};

export default Home;
