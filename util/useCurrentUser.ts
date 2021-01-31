import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { auth, firestore } from "../config/firebase-config";
import { userState } from "../pages";

export default function useCurrentUser() {
  const [_, setUser] = useRecoilState(userState);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (!user) {
        setUser(null);
        return;
      }
      firestore()
        .collection("users")
        .doc(user.uid)
        .onSnapshot((snapshot) => {
          const data = snapshot?.data();
          if (!data) return;
          setUser({
            user,
            ...data,
          });
        });
    });
  }, []);
}
