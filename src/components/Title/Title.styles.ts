import styled, { css } from 'styled-components';

const Container = styled.h1`
  ${({ theme: { mediaQuery, font, colors } }) => css`
    font-size: ${font.sizes.medium};
    margin-bottom: 16px;
    font-weight: 600;
    color: ${colors.lightPurple};

    ${mediaQuery.tabletMediaQuery} {
      font-size: ${font.sizes.large};
    }
    ${mediaQuery.smallDesktopMediaQuery} {
      font-size: ${font.sizes.large};
    }
    ${mediaQuery.desktopMediaQuery} {
      font-size: ${font.sizes.large};
      margin-bottom: 24px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      font-size: ${font.sizes.xlarge};
    }
  `}
`;

export default Container;
