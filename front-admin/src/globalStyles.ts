import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({theme}) => theme.white};
  }
`;
 
export default GlobalStyle;