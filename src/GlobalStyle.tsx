import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

export const theme = {
  pink: 'hsl(7, 92%, 85.3%, 1)',
  darkPink: 'hsla(7, 92%, 10%, 1)'
};

const GlobalStyle = createGlobalStyle`
    body {    
        font-family: Roboto;
    }
`;

export default GlobalStyle;
