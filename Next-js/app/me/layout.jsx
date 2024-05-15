"use client"

import { useRouter } from 'next/navigation'
import { LazyMotion, domAnimation } from 'framer-motion'
import './layout.css'
import { useEffect, useState } from 'react'
import NotFound from '@/not-found'
import useCaches from '@/utils/useCaches'
import Navbar from '@/components/navbar'

const meLayout = ({ children }) => {
   const router = useRouter()
   const cahce = useCaches()
   const [isAuth, setIsAuth] = useState(false)
   const [isLoading, setIsLoading] = useState(true)
   
   useEffect(() => {
      if (cahce.getCache("userLevel")) {
         setIsAuth(true)
         setIsLoading(false)
         return void 0
      }

      if (sessionStorage.getItem("session")) {
         try {
            const raw_decodedLevel = atob(sessionStorage.getItem("session"))
            const userLevel = raw_decodedLevel.charAt(raw_decodedLevel.length - 1)
            
            if (isNaN(parseInt(userLevel))) {
               router.push("/home");
            } else {
               cahce.setCache("userLevel", userLevel)
               setIsAuth(true)
            }
         } catch (error) {}
		}
      
      setIsLoading(false)
   }, [])

   return (
      <div className='me-layout'>
         {!isLoading ? 
            <>
               {isAuth ? 
                  (
                     <LazyMotion features={domAnimation}>
                        <div className="me-layout">
                           <Navbar />

                           <div className="children">{children}</div>
                        </div>
                     </LazyMotion>
                  ) : <NotFound />
               }
            </> 
            : 
            <div className="loading">
               <div className='texts'>
                  <span>Loading...</span>
               </div>
               <h3>Mohon Tunggu Sebentar.</h3>
            </div>
         }
      </div>
   ) 
}

export default meLayout