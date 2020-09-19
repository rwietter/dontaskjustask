import React, { useEffect, useState } from 'react';
import TogglerTheme from '../../components/ThemeToggler/ThemeToggle';
import * as S from './styled';
import { func, string } from 'prop-types';

function Header({ theme, toggleTheme }) {
  return (
    <S.container>
      <S.header>
        <h1>
          Não peça se alguém sabe, <h2>apenas pergunte</h2>
        </h1>
        <TogglerTheme theme={theme} toggleTheme={toggleTheme}></TogglerTheme>
      </S.header>
    </S.container>
  );
}

Header.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export { Header };
