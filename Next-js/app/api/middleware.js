import { NextResponse } from "next/server"

export async function middleware(request) {
   console.log("passing middleware")

   return NextResponse.json({ message: "request is blocking" });
}

export const config = {
   matcher: '/data/:path*',
}