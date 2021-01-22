import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "../components/Landing/Splash";
import { darkTheme, lightTheme } from "../styled-components/theme";

export default function Home() {
  const [theme, setTheme] = useState(darkTheme);

  // determine view based on if user is signed in

  return (
    <ThemeProvider theme={theme}>
      <Splash />
    </ThemeProvider>
  );
}
