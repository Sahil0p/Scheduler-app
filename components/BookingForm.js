export default function BookingForm({
  name,
  setName,
  email,
  setEmail,
  onSubmit,
}) {
  return (
    <div className="bg-gray-50 border rounded-xl p-4 sm:p-5">
      
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Enter Details
      </h2>

      <input
        placeholder="Your Name"
        className="border rounded-lg px-3 py-2 w-full mb-3 text-sm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Your Email"
        className="border rounded-lg px-3 py-2 w-full mb-4 text-sm"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        onClick={onSubmit}
        className="bg-black text-white w-full py-2 rounded-lg text-sm"
      >
        Confirm Booking
      </button>
    </div>
  );
}