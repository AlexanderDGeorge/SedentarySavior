import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface User {
  name: string;
  email?: string;
}

export default function useUser() {
  const [user, setUser] = useState<User | undefined>(undefined);

  window.Cookies = Cookies;

  useEffect(() => {
    // @ts-ignore
    setUser(Cookies.get("user"));
  }, []);

  function createUser(name: string) {
    if (user) return;
    const newUser: User = {
      name,
    };
    Cookies.set("user", newUser);
    setUser(newUser);
    console.log("user");
  }

  return { user, createUser };
}
