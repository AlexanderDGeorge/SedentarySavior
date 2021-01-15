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
    font-family: sans-serif;
    transition: background-color 0.6s ease-in-out;
    font-weight: 300;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway';
    font-weight: 500;
  }
  input, button {
    font-family: 'Raleway';
    outline: none;
  }
  button {
    height: 40px;
    min-width: 80%;
    border: 0;
    border-radius: 24px;
    padding: 8px;
    box-shadow: 0 4px 24px -8px black;
    color: white;
    background: #d00000;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:disabled {
      box-shadow: 0 0 0 0;
      color: #333333;
      background: #aaaaaa;
      cursor: not-allowed;
    }
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
