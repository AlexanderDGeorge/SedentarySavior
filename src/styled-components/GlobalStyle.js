import { createGlobalStyle } from "styled-components";
import Raleway from "./Raleway.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    src: url(${Raleway});
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Raleway';
    transition: background-color 0.6s ease-in-out;
  }
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    background: gray;
  }
  #root {
    min-height: 400px;
    height: 400px;
    min-width: 320px;
    width: 30%;
    max-width: 600px;
    border: 1px solid;
  }
`;

export default GlobalStyle;
