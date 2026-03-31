export default function Calendar({ date, setDate }) {
  return (
    <input
      type="date"
      value={date}
      onChange={(e) => setDate(e.target.value)}
      className="border rounded-lg px-3 py-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}