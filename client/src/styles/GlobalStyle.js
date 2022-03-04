import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
  }

body {
    box-sizing: border-box;
    padding: 0px;
}
  
`;

export default GlobalStyle;
