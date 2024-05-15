"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default () => {
   const pathName = usePathname();
   const searchParam = useSearchParams();


   useEffect(() => {
   }, [pathName, searchParam]);

   return null;
}