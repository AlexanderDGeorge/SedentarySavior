import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styled-components/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styled-components/theme";

ReactDOM.render(
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
