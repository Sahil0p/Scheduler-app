import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";
import { validateBooking } from "@/utils/validateBooking";
import { sendBookingEmail } from "@/lib/email";

export async function POST(req) {
  try {
    const body = await req.json();

    console.log("📥 Incoming booking:", body);

    // ✅ Validation
    const error = validateBooking(body);
    if (error) {
      console.log("❌ Validation error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    const { userId, guestName, guestEmail, date, time } = body;

    // ❌ Prevent double booking
    const existing = await prisma.booking.findFirst({
      where: {
        userId,
        date: new Date(date),
        time,
      },
    });

    if (existing) {
      console.log("⚠️ Slot already booked");
      return NextResponse.json(
        { error: "Slot already booked" },
        { status: 400 }
      );
    }

    // ✅ Create booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        guestName,
        guestEmail,
        date: new Date(date),
        time,
      },
    });

    console.log("✅ Booking created:", booking);

    // 🔥 EMAIL DEBUG
    console.log("📧 Sending email to:", guestEmail);

    const emailRes = await sendBookingEmail({
      to: guestEmail,
      name: guestName,
      date,
      time,
    });

    console.log("📧 Email result:", emailRes);

    return NextResponse.json(booking);

  } catch (error) {
    console.error("❌ BOOKING ERROR:", error);

    return NextResponse.json(
      { error: "Booking failed" },
      { status: 500 }
    );
  }
}