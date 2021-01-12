import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function useFetchUser() {
  const [user, setUser] = useState<null | string | undefined>(undefined);

  useEffect(() => {
    setUser(Cookies.get("user"));
  }, []);

  return { user };
}
