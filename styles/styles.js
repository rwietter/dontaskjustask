import styled from 'styled-components';

const container = styled.div`
  min-height: 100vh;
  padding: 0 0.8rem;
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (min-width: 650px) {
    max-width: 70vw;
  }
  @media (min-width: 1000px) {
    max-width: 50vw;
  }
`;

const main = styled.main`
  padding: 3rem 0 0 0;
  flex: 1;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  a {
    box-shadow: inset 0 -6px 0 ${({ theme }) => theme.borderShadow};
    transition: box-shadow 0.5s ease;
    &:hover {
      box-shadow: inset 0 -6px 0 ${({ theme }) => theme.title};
    }
  }
`;

// main
const content = styled.section`
  line-height: 1.8rem;
  h1,
  h2 {
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: clamp(14px, 2vw, 1.4em);
    font-weight: 700;
  }
  p {
    font-size: clamp(12px, 2vw, 1em);
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
    line-height: 1.5rem;
    @media (min-width: 1000px) {
      line-height: 1.7em;
      margin: 2rem 0 2rem 0;
      text-align: justify;
    }
  }
`;

const section = styled.section`
  width: 100%;
  p {
    font-size: clamp(12px, 2vw, 1em);
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
    line-height: 1.5rem;
    @media (min-width: 1000px) {
      line-height: 1.7rem;
      margin: 0 0 1.5rem 0;
      text-align: justify;
    }
  }
  ul {
    padding: 0 0 0 20px;
    margin: 1rem 0 2rem 0;
    li {
      cursor: pointer;
      margin: 5px 0;
      max-width: max-content;
      font-family: ${({ theme }) => theme.fontPrimary};
      font-size: clamp(13px, 2vw, 1rem);
    }
  }
`;

const footer = styled.footer`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${({ theme }) => theme.fontPrimary};
  font-size: clamp(10px, 1.5vw, 0.8rem);
  a {
    cursor: pointer;
    font-size: clamp(10px, 1.5vw, 0.7rem);
    font-weight: 600;
  }
  svg {
    fill: ${({ theme }) => theme.text};
  }
`;

const progress = styled.div`
  width: 100%;
  height: 8px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  span {
    height: 8px;
    background: #333333;
    transition: background-image 0.3s ease;
    background: ${({ theme }) => theme.gradient};
    width: 0%;
    position: fixed;
    opacity: 0.6;
  }
`;

export { main, container, footer, content, section, progress };
