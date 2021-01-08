import { useEffect, useState } from "react";
import localForage from "localforage";

export default function useLocalForage() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function fetchUser() {
      try {
        const value = await localForage.getItem("ssuser");
        // setUser(value);
        console.log(value);
      } catch (err) {
        console.error(err);
      }
    }

    async function setUser() {}

    fetchUser();
  }, []);

  return { user };
}
