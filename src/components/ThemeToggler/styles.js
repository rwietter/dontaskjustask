import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.toggle};
  border: none;
  outline: 0;
  border-radius: 2rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
  width: 3.3rem;
  height: 1.5rem;
  img {
    height: 1.1rem;
    width: 1.1rem;
    transition: transform 0.3s ease;
    transform: ${({ lightTheme }) =>
      lightTheme ? 'translateY(0)' : 'translateY(100px)'};
  }
  img:first-child {
    position: absolute;
    top: 3px;
    left: 4px;
  }
  img:nth-child(2) {
    transform: ${({ lightTheme }) =>
      lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    position: absolute;
    top: 3px;
    right: 3px;
  }
`;

export { ToggleContainer };
