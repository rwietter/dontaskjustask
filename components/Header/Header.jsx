import React from 'react';
import TogglerTheme from '../../components/ThemeToggler/ThemeToggle';
import * as S from './styled';
import { func, string } from 'prop-types';

function Header({ theme, toggleTheme }) {
  return (
    <S.header>
      <h1>Não peça se alguém sabe, apenas pergunte</h1>
      <TogglerTheme theme={theme} toggleTheme={toggleTheme}></TogglerTheme>
    </S.header>
  );
}

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export { Header };
