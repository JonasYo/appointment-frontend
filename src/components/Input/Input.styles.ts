import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 30px;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  padding: 12px;
  width: 100%;
  color: #666360;
  transition: all 1s;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: ${({ theme }) => theme.colors.red};
    `}

  ${({ isFocused }) =>
    isFocused &&
    css`
      color: #ff9000;
      border-color: ${({ theme }) => theme.colors.tomato};
    `}

  ${({ isFilled }) =>
    isFilled &&
    css`
      color: #ff9000;
    `}

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin-right: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;

export const InputStyled = styled.input`
  &&& {
    font-size: 18px;
    padding: 0px;
    outline: none;

    flex: 1;
    background: transparent;
    border: 0;
    color: ${({ theme }) => theme.colors.black};

    &::placeholder {
      color: ${({ theme }) => theme.colors.inputPlaceholder};
    }

    & + input {
      margin-top: 8px;
    }
  }
`;
