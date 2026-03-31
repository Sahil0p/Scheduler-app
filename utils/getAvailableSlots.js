export function getAvailableSlots(allSlots, bookedSlots) {
  if (!allSlots || !bookedSlots) return [];

  return allSlots.filter(
    (slot) => !bookedSlots.includes(slot)
  );
}