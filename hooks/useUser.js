import { useState } from "react";
import axios from "axios";

export function useUser() {
  const [user, setUser] = useState(null);

  async function fetchUser(username) {
    const res = await axios.get(
      `/api/users?username=${username}`
    );
    setUser(res.data);
  }

  return { user, fetchUser };
}