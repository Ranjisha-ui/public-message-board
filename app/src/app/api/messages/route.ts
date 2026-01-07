import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";

export async function GET() {
  try {
    const messages = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(messages);
  } catch {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    if (!name || !message) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    const post = await prisma.post.create({
      data: { name, message },
    });

    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create" }, { status: 500 });
  }
}
