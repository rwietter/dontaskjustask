import styled from 'styled-components';

const header = styled.header`
  min-height: 75px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  width: 100%;

  h1 {
    margin: 2rem 0 0 0;
    font-size: clamp(14px, 2vw, 1.4rem);
    font-family: ${({ theme }) => theme.fontSecondary};
    color: ${({ theme }) => theme.title};
  }
`;

export { header };
