"use client"

import { useRouter } from 'next/navigation'
import { LazyMotion, domAnimation } from 'framer-motion'
import './layout.css'
import { useEffect } from 'react'
import NotFound from '@/not-found'
import useCaches from '@/utils/useCaches'

const meLayout = ({ children }) => {
   const router = useRouter()
   const cahce = useCaches()
   let isAuth = false
   
   useEffect(() => {
      if (cahce.getCache("userLevel")) {
         isAuth = true;
         return void 0
      }
      
      if (sessionStorage.getItem("session")) {
			const raw_decodedLevel = atob(sessionStorage.getItem("session"))
			const userLevel = raw_decodedLevel.charAt(raw_decodedLevel.length - 1)
			
			if (isNaN(parseInt(userLevel))) {
				router.push("/home");
			} else {
            cahce.setCache("userLevel", userLevel)
            isAuth = true
         }
		}
   })

   return isAuth ? (
      <LazyMotion features={domAnimation}>
         <div className="me-layout">
            <nav>navbar</nav>

            <div className="children">{children}</div>
         </div>
      </LazyMotion>
   ) : <NotFound />
}

export default meLayout