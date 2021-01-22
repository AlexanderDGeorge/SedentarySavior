import { useState } from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import DashBoard from "../components/DashBoard/DashBoard";
import Splash from "../components/Landing/Splash";
import { darkTheme, lightTheme } from "../styled-components/theme";

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);
  const user = { name: "Alex" };

  // determine view based on if user is signed in

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        {user ? <DashBoard user={user} /> : <Splash />}
      </ThemeProvider>
    </RecoilRoot>
  );
}
