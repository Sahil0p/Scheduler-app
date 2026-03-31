import { useState } from "react";
import axios from "axios";

export function useSlots() {
  const [slots, setSlots] = useState([]);

  async function fetchSlots(userId, date) {
    const res = await axios.get(
      `/api/bookings/getSlots?userId=${userId}&date=${date}`
    );
    setSlots(res.data);
  }

  return { slots, fetchSlots };
}