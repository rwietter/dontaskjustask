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
  line-height: 1.4rem;
  h1,
  h2 {
    font-family: ${({ theme }) => theme.fontPrimary};
    font-size: clamp(16px, 2vw, 1.5em);
    font-weight: 700;
  }
  p {
    font-size: clamp(12px, 2vw, 1em);
    font-family: ${({ theme }) => theme.fontSecondary};
    font-weight: 500;
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
    @media (min-width: 1000px) {
      line-height: 1.7em;
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
    }
  }
`;

const footer = styled.footer`
  width: 100%;
  height: 50px;
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
  img {
    color: ${({ theme }) => theme.text};
  }
`;

export { main, container, footer, content, section };
