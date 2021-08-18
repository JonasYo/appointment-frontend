import styled, { css } from 'styled-components';

const Container = styled.h2`
  ${({ theme: { mediaQuery, font } }) => css`
    font-size: ${font.sizes.small};
    font-weight: 300;

    ${mediaQuery.tabletMediaQuery} {
      font-size: ${font.sizes.small};
    }
    ${mediaQuery.desktopMediaQuery} {
      font-size: ${font.sizes.xsmall};
      margin-bottom: 24px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      font-size: ${font.sizes.xsmall};
    }
  `}
`;

export default Container;
