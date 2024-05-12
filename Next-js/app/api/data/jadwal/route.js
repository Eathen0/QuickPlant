import { NextRequest, NextResponse } from "next/server";

// const test = new NextRequest();
// test.arrayBuffer

export async function POST(request) {
   console.log("route to jadwal")

   // const req_json = await request.json();

   return NextResponse.json({ message: "nothing here........." }, { status: 200 });
}