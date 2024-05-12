import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(request) {
   try {
      const requestMethod = request.method;
      const requestJson = await request.body.json();
   
      return NextResponse.json({ method: requestMethod, requestData: requestJson });

   } catch (error) {
      console.log(error.message)
      return NextResponse.json({ error: "falied to get request body" }, {status: 400});
   }
}