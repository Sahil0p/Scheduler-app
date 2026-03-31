export default function TimeSlots({
  slots,
  selected,
  setSelected,
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3">
      {slots.map((slot) => (
        <button
          key={slot}
          onClick={() => setSelected(slot)}
          className={`text-sm py-2 rounded-lg border ${
            selected === slot
              ? "bg-black text-white"
              : "bg-white hover:bg-gray-100"
          }`}
        >
          {slot}
        </button>
      ))}
    </div>
  );
}