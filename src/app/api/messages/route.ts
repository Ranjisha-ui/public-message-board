export const runtime = "nodejs";

import { NextResponse } from "next/server";
import prisma from "@/app/lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.message.findMany();
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
