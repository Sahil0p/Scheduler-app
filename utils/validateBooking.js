export function validateBooking(data) {
  const { userId, guestName, guestEmail, date, time } =
    data;

  if (!userId) return "User ID is required";
  if (!guestName) return "Guest name is required";
  if (!guestEmail) return "Guest email is required";
  if (!date) return "Date is required";
  if (!time) return "Time is required";

  return null;
}