import { atom, useRecoilValue } from "recoil";
import DashBoard from "../components/DashBoard/DashBoard";
import Splash from "../components/Landing/Splash";
import useCurrentUser from "../util/useCurrentUser";

export const userState = atom({
  key: "userState",
  default: undefined,
});

export default function Home() {
  const user = useRecoilValue(userState);

  useCurrentUser();

  // const data = await fetch("http://localhost:3000/api/");
  // console.log(fetch("http://localhost:3000/api/"));

  return user ? <DashBoard /> : <Splash />;
}
