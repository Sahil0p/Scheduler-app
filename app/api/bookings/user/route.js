import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json(
      { error: "User ID required" },
      { status: 400 }
    );
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      orderBy: { date: "asc" },
    });

    return NextResponse.json(bookings);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}