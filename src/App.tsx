import 'normalize.css';
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import About from './components/About';
import Header from './components/Header';
import Links from './components/Links';
import Statement from './components/Statement';
import GlobalStyle, { colors } from './GlobalStyle';

const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(${colors.blue}, ${colors.pink});
`;

const App: React.FC = () => {
  return (
    // @ts-ignore
    <ThemeProvider theme={colors}>
      <Container>
        {/* @ts-ignore */}
        <GlobalStyle />
        <Header />
        <Statement />
        <Links />
        <About />
      </Container>
    </ThemeProvider>
  );
};

export default App;
