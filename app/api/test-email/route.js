import { sendBookingEmail } from "@/lib/email";

export async function GET() {
  await sendBookingEmail({
    to: "sahilahmed2909@gmail.com",
    name: "Test User",
    date: "Today",
    time: "10:00 AM",
  });

  return Response.json({ message: "Email sent" });
}