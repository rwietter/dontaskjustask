/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

import Inter_Regular from '../fonts/Inter_Web/Inter-Regular.woff2';
import Inter_SemiBold from '../fonts/Inter_Web/Inter-Regular.woff2';
import Montserrat_Black from '../fonts/Montserrat/Montserrat-Bold.ttf'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat_Black});
    src: url('${Montserrat_Black}?#iefix') format('embedded-opentype'),
        url(${Montserrat_Black}) format('woff2'),
        url(${Montserrat_Black}) format('woff'),
        url(${Montserrat_Black})  format('truetype'),
  }
  
  @font-face {
    font-family: 'Inter';
    src: url(${Inter_SemiBold});
    src: url('${Inter_SemiBold}?#iefix') format('embedded-opentype'),
        url(${Inter_SemiBold}) format('woff2'),
        url(${Inter_SemiBold}) format('woff'),
        url(${Inter_SemiBold})  format('truetype'),
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    align-items: center;
    display: flex;
    place-content: center;
    width: 100%;
    margin: 0;
    padding: 0;
    transition: background 0.3s ease-in-out;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track-piece {
    background: #16171d;
    border-left: 1px solid #16171d;
  }

  ::-webkit-scrollbar-thumb:vertical,
  ::-webkit-scrollbar-thumb:horizontal {
    background-color: #df7296;
    border-radius: 10rem;
  }

  ::-webkit-scrollbar-thumb:vertical:hover,
  ::-webkit-scrollbar-thumb:horizontal:hover {
    background-color: #c14c6f;
  }

  ::-moz-selection { /* Code for Firefox */
    color: ${({ theme }) => theme.select};
    background: ${({ theme }) => theme.body};
  }

  ::selection {
    color: ${({ theme }) => theme.select};
    background: ${({ theme }) => theme.body};
  }

`;

export { GlobalStyles };
