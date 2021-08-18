import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  ${({ theme: { mediaQuery, patterns } }) => css`
    padding: 2.5rem 0px 2.5rem 2.5rem;

    ${mediaQuery.tabletMediaQuery} {
      padding: ${patterns.tabletPadding};
    }
    ${mediaQuery.smallDesktopMediaQuery} {
      padding: ${patterns.tabletPadding};
    }
    ${mediaQuery.desktopMediaQuery} {
      padding: ${patterns.desktopPadding};
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      padding: ${patterns.extraDesktopPadding};
    }
  `}
`;

export const Description = styled.p`
  ${({ theme: { mediaQuery, font } }) => css`
    font-weight: 400;
    text-align: center;
    font-size: ${font.sizes.small};

    ${mediaQuery.tabletMediaQuery} {
      font-size: ${font.sizes.small};
    }
    ${mediaQuery.smallDesktopMediaQuery} {
      font-size: ${font.sizes.small};
    }
    ${mediaQuery.desktopMediaQuery} {
      font-size: ${font.sizes.medium};
      margin-top: 24px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      font-size: ${font.sizes.medium};
    }
  `}
`;

export const CardsWrapper = styled.div`
  ${({ theme: { mediaQuery, patterns } }) => css`
    padding: 0 2.5rem 0 2.5rem;
    margin: 0rem 0px 6rem;
    width: 100%;
    align-self: center;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 30px;

    ${mediaQuery.tabletMediaQuery} {
      padding: ${patterns.tabletPadding};
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 56px;
    }
    ${mediaQuery.smallDesktopMediaQuery} {
      padding: ${patterns.tabletPadding};
      grid-template-columns: repeat(2, 1fr);
      gap: 30px 56px;
    }
    ${mediaQuery.desktopMediaQuery} {
      padding: ${patterns.desktopPadding};
      grid-template-columns: repeat(3, 1fr);
      gap: 30px 32px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      padding: ${patterns.extraDesktopPadding};
      grid-template-columns: repeat(3, 1fr);
      gap: 30px 32px;
    }
  `}
`;
