import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
}

body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    box-sizing: border-box;
    padding: 0px;

}

a {
    text-decoration: none;
}

`;

export default GlobalStyle;
