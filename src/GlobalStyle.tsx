import { createGlobalStyle } from 'styled-components';
import 'typeface-roboto';

export const colors = {
  pink: 'hsl(7, 92%, 85.3%)',
  darkPink: 'hsl(7, 92%, 10%)',
  black: 'hsl(0, 0%, 5%)',
  blue: 'hsl(205, 20%, 62%)'
};

const GlobalStyle = createGlobalStyle`
    body {    
        font-family: Roboto;
    }
`;

export default GlobalStyle;
