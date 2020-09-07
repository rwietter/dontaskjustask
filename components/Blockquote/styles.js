import styled from 'styled-components';

const Blockquote = styled.blockquote`
  background: ${({ theme }) => theme.blockquote};
  border-left: 8px solid ${({ theme }) => theme.blockquoteBorder};
  margin: ${({ id }) => (id === 'question' ? '2rem' : '1.5rem')} 0;
  padding: 1em 0 1em 25px;
  position: relative;
  border-radius: 4px;
  line-height: initial;
  &::before {
    position: absolute;
    content: '“';
    color: #ccc;
    font-size: clamp(25px, 2vw, 3em);
    top: 0;
    left: 4px;
    margin-top: 5px;
  }
  &::after {
    position: absolute;
    color: #ccc;
    content: '”';
    margin-left: 8px;
    bottom: ${({ id }) => (id === 'question' ? '0' : '-6px')};
    font-size: clamp(25px, 2vw, 3em);
    @media (max-width: 230px) {
      margin: 0;
    }
  }
  span {
    max-width: 90%;
    display: inline-block;
  }
  p {
    display: inline;
    font-size: clamp(11px, 2vw, 1em);
    font-family: ${({ theme }) => theme.fontSecondary};
    color: ${({ theme }) => theme.blockquoteText};
    font-weight: 400;
  }
  @media (min-width: 1000px) {
    padding: 2em 0 2em 50px;
    &::before {
      top: 10px;
      left: 8px;
    }
    &::after {
      top: ${({ id }) => (id === 'question' ? '10rem' : '55px')};
      padding-left: 20px;
    }
  }
`;

export { Blockquote };
