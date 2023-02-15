import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    user-select: none;
    box-sizing: border-box;
  }
  body {
    font-family: "Roboto", sans-serif;
  }
`;

export default GlobalStyles;
