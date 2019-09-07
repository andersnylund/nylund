import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import GlobalStyle, { theme } from './GlobalStyle';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
