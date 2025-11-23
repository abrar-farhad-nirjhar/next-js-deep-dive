import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({ id: 76, title: "Sample Title", body: "Sample body content" });
}


export async function POST(request: Request) {
    const data = await request.json();
    console.log("Received data:", data);
    return NextResponse.json({ message: "Data received successfully", receivedData: data }, { status: 201 });
}