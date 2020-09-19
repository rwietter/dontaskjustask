import styled from 'styled-components';

const container = styled.div`
`;

const header = styled.header`
  display: flex;
  padding: 20px 10px 0 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (min-width: 650px) {
    max-width: 70%;
  }
  @media (min-width: 1000px) {
    max-width: 50%;
    padding: 20px 10px 0 0;
  }

  h1, h2 {
    margin: 0 0 0 0;
    font-size: clamp(19px, 2vw, 1.6rem);
    font-family: ${({ theme }) => theme.fontPrimary};
    font-weight: 700;
    color: ${({ theme }) => theme.title};
    line-height: 1.8rem;
    @media screen and (min-width: 780px) {
      line-height: 2.3rem;
    }
  }
  h2 {
    margin: 0;
    padding: 0;
  }
`;


export { container, header };
