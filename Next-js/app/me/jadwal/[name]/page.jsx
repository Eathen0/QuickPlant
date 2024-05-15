"use client"

import { useEffect, useState } from 'react';
import './style.css';
import useCaches from '@/utils/useCaches';
import User_C_Jadwal from '@/components/users/jadwal';
import Admin_C_Jadwal from '@/components/admin/jadwal';

const Jadwal = ({ params }) => {
   const cache = useCaches()
   const [isAdmin, setIsAdmin] = useState(false)


   useEffect(() => {
      setIsAdmin(cache.getCache('userLevel') == 1)
   }, [])

   return isAdmin ? <Admin_C_Jadwal jadwalName={params.name} /> : <User_C_Jadwal jadwalName={params.name} />
}


export default Jadwal