import { NextResponse } from "next/server";
import crypto from "crypto";
import { addToken } from "@/lib/auth";

export async function POST(request) {
  const { password } = await request.json();

  if (password === process.env.ADMIN_PASSWORD) {
    const token = crypto
      .createHmac("sha256", process.env.API_SECRET_KEY)
      .update(`${password}-${Date.now()}`)
      .digest("hex");

    addToken(token);
    return NextResponse.json({ success: true, token });
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
