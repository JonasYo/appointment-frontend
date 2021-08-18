import styled from 'styled-components';

const Container = styled.button`
  cursor: pointer;
  background: ${({ primary, theme }) => (primary ? theme.colors.tomato : theme.colors.white)};

  height: 56px;
  width: 100%;

  border-radius: 30px;
  border: 0;

  padding: 0 16px;
  color: #312e38;
  color: ${({ primary, theme }) => (primary ? theme.colors.white : theme.colors.tomato)};
  font-weight: 500;
  font-size: 20px;
  margin-top: 16px;

  justify-content: center;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.theme.colors.tomato};
`;

export default Container;
