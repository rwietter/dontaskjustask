import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../styles/theme';
import { GlobalStyles } from '../styles/globals';
import { UseDarkMode } from '../hooks/useDarkMode';
import { Header } from '../components/Header/Header';

import * as S from '../styles/styles';

function App({ Component, pageProps }) {
  const [theme, toggleTheme, componentMounted] = UseDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <S.container>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Component {...pageProps} />
      </S.container>
    </ThemeProvider>
  );
}

export default App;
