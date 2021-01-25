import { useState } from "react";
import { atom, useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import DashBoard from "../components/DashBoard/DashBoard";
import Splash from "../components/Landing/Splash";
import { darkTheme, lightTheme } from "../styled-components/theme";

export const userState = atom({
  key: "userState",
  default: undefined,
});

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);
  const user = useRecoilValue(userState);
  // determine view based on if user is signed in

  return (
    <ThemeProvider theme={theme}>
      {user ? <DashBoard user={user} /> : <Splash />}
    </ThemeProvider>
  );
}
