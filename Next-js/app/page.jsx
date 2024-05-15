"use client";

import { useRouter } from "next/navigation";
import useCaches from "./utils/useCaches";
import useCookie from "./utils/useCookie";
import { useEffect } from "react";

const Home = () => {
	const router = useRouter();

	useEffect(() => {
		const cache = useCaches();
		const refresh_token = useCookie("refresh_token").isExist();
		const access_token = useCookie("access_token").isExist();

		if (!cache.getCache("userLevel") && access_token && refresh_token) {
			if (!sessionStorage.getItem("session")) {
				fetch("/api/auth/authorize", {
					method: "POST",
					headers: { authorization: access_token },
				})
					.then((response) => response.json())
					.then((data) => {
						if (data.codeIsMatch) {
							sessionStorage.setItem(
								"session",
								btoa("the user level is : " + data.userLevel)
							);
							cache.setCache("userLevel", data.userLevel);
							router.push("/me/dashboard");
						}
					});
			} else {
				try {
					const raw_decodedLevel = atob(sessionStorage.getItem("session"));
					const userLevel = raw_decodedLevel.charAt(
						raw_decodedLevel.length - 1
					);
					if (!isNaN(parseInt(userLevel))) {
						cache.setCache("userLevel", parseInt(userLevel));
						return router.push("/me/dashboard");
					} else {
						sessionStorage.removeItem("session");
						return router.push("/home");
					}
				} catch (error) {
					return router.push("/home");
				}
			}
		} else if (cache.getCache("userLevel")) {
			return router.push("/me/dashboard");
		} else {
			return router.push("/home");
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
