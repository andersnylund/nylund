import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle, { theme } from './GlobalStyle';
import Header from './components/Header';
import Statement from './components/Statement';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Statement />
      </>
    </ThemeProvider>
  );
};

export default App;
