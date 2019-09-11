import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';

import GlobalStyle, { colors } from './GlobalStyle';
import Header from './components/Header';
import Statement from './components/Statement';

const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${colors.blue}, ${colors.pink});
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={colors}>
      <Container>
        <GlobalStyle />
        <Header />
        <Statement />
      </Container>
    </ThemeProvider>
  );
};

export default App;
