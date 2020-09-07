/* eslint-disable max-len */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Arvo:ital,wght@0,400;0,700;1,400&family=Poppins:ital,wght@0,400;0,500;1,500&display=swap');
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
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
`;

export { GlobalStyles };
