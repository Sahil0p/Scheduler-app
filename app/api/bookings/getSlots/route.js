import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { generateSlots } from "@/utils/generateSlots";
import { getAvailableSlots } from "@/utils/getAvailableSlots";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  const date = searchParams.get("date");

  if (!userId || !date) {
    return NextResponse.json(
      { error: "Missing parameters" },
      { status: 400 }
    );
  }

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId,
        date: new Date(date),
      },
    });

    const bookedSlots = bookings.map((b) => b.time);

    const allSlots = generateSlots();
    const availableSlots = getAvailableSlots(
      allSlots,
      bookedSlots
    );

    return NextResponse.json(availableSlots);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch slots" },
      { status: 500 }
    );
  }
}