"use client";

import { useRouter } from "next/navigation";
import useCaches from "./utils/useCaches";
import useCookie from "./utils/useCookie";

const Home = () => {
	const router = useRouter();
	const cache = useCaches()

	const access_token = useCookie("access_token").isExist();
	const refresh_token = useCookie("refresh_token").isExist();
	
	if (!cache.getCache("userLevel") && access_token && refresh_token) {
		if (!sessionStorage.getItem("session")) {
			fetch("/api/auth/authorize", { method: "POST", headers: { authorization: access_token } })
			.then(response => response.json())
			.then(data => {
				sessionStorage.setItem("session", btoa("the user level is : " + data.userLevel))
				cache.setCache("userLevel", data.userLevel)
			})
		} else {
			const raw_decodedLevel = atob(sessionStorage.getItem("session"))
			const userLevel = raw_decodedLevel.charAt(raw_decodedLevel.length - 1)
			
			if (!isNaN(parseInt(userLevel))) {
				router.push("/dashboard");
			}
		}
	}

	router.push("/home");
};

export default Home;