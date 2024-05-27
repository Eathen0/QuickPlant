"use client"

import { LazyMotion, domAnimation } from 'framer-motion'
import './layout.css'
import { useEffect, useState } from 'react'
import NotFound from '@/not-found'
import Navbar from '@/components/navbar'

const meLayout = ({ children }) => {
   const [isAuth, setIsAuth] = useState(false)
   const [isLoading, setIsLoading] = useState(true)
   
   useEffect(() => {
      (async function verifyaccess () {
         try {
            await fetch('/api/auth/verifyaccess', { method: 'POST', credentials: 'same-origin' }).then(response => {
               if (response.ok) return setIsAuth(true)
               else {
                  fetch('/api/auth/refresh', { method: 'POST', credentials: 'same-origin' }).then(response => {
                     if (response.ok) verifyaccess()
                  })
               }
            })
         } catch (error) { 
            console.log(error)
         }
         setIsLoading(false) 
      })()
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