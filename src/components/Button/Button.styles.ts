import styled, { css } from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

const Container = styled.button`
  ${({ theme: { mediaQuery, font, colors } }) => css<ButtonProps>`
    cursor: pointer;
    background: ${({ primary }) => (primary ? colors.purple : colors.white)};
    color: ${({ primary }) => (primary ? colors.white : colors.purple)};
    border-radius: 4px;
    border: ${({ primary }) => (!primary ? `2px solid${colors.purple}` : 'unset')};
    height: 42px;
    width: 100%;
    font-size: ${font.sizes.xsmall};

    ${mediaQuery.tabletMediaQuery} {
    }
    ${mediaQuery.smallDesktopMediaQuery} {
    }
    ${mediaQuery.desktopMediaQuery} {
      height: 56px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      height: 56px;
    }

    &:disabled {
      background: #ccc;
      color: #fff;
      pointer-events: none;
    }
  `}
`;

export default Container;
