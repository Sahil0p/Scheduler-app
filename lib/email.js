import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBookingEmail({
  to,
  name,
  date,
  time,
}) {
  try {
    console.log("📩 Sending email to:", to);

    const response = await resend.emails.send({
      from: "Scheduler <onboarding@resend.dev>",
      to,
      subject: "Booking Confirmed 🎉",
      html: `
        <h2>Hello ${name},</h2>
        <p>Your booking is confirmed.</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
      `,
    });

    console.log("✅ EMAIL SENT:", response);
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
  }
}