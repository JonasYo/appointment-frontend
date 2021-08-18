import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
  ${({ theme: { mediaQuery, patterns } }) => css`
    padding: 2.5rem 2.5rem 0rem 2.5rem;

    ${mediaQuery.tabletMediaQuery} {
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

export const Content = styled.div`
  ${({ theme: { mediaQuery, patterns } }) => css`
    display: flex;
    flex-direction: column;

    background-size: cover;
    padding: 0rem 2.5rem 2.5rem 2.5rem;

    ${mediaQuery.tabletMediaQuery} {
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

export const ButtonWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 5vh;

    > button {
      &:first-child {
        margin-bottom: 20px;
      }
    }

    ${mediaQuery.tabletMediaQuery} {
    }
    ${mediaQuery.smallDesktopMediaQuery} {
    }
    ${mediaQuery.desktopMediaQuery} {
      width: 28vw;
      flex-direction: row;

      > button {
        width: 48%;
      }
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      width: 28vw;
      flex-direction: row;

      > button {
        width: 48%;
      }
    }
  `}
`;

export const TableWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    ${mediaQuery.mobileMediaQuery} {
      overflow: scroll;
      height: 50vh;
    }
    ${mediaQuery.tabletMediaQuery} {
    }
    ${mediaQuery.smallDesktopMediaQuery} {
    }
    ${mediaQuery.desktopMediaQuery} {
    }
    ${mediaQuery.extraDesktopMediaQuery} {
    }
  `}
`;

export const Table = styled.table`
  ${({ theme: { mediaQuery } }) => css`
    border-collapse: collapse;
    box-shadow: 0 5px 10px #e1e5ee;
    text-align: left;
    overflow: hidden;
    width: 100%;

    ${mediaQuery.mobileMediaQuery} {
      box-shadow: unset;
    }
  `}
`;

export const Thead = styled.thead`
  ${({ theme: { mediaQuery } }) => css`
    box-shadow: 0 5px 10px #e1e5ee;

    ${mediaQuery.mobileMediaQuery} {
      box-shadow: unset;
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  `}
`;

export const Th = styled.th`
  ${({ theme: { font } }) => css`
    padding: 1rem 2rem;
    letter-spacing: 0.1rem;
    font-size: ${font.sizes.xsmall};
  `}
`;

export const Tr = styled.tr`
  ${({ theme: { mediaQuery } }) => css`
    &:nth-child(even) {
      background-color: #f4f6fb;
    }

    ${mediaQuery.mobileMediaQuery} {
      display: block;
      margin-bottom: 0.625em;

      box-shadow: 0 5px 10px #e1e5ee;

      border: 1px solid #ddd;
    }
  `}
`;

export const Td = styled.td`
  ${({ theme: { mediaQuery, font } }) => css`
    padding: 1rem 2em;

    ${mediaQuery.mobileMediaQuery} {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;

      &:nth-child(even) {
        background-color: #f4f6fb;
      }

      &::before {
        content: attr(data-label);
        float: left;
        font-size: ${font.sizes.xsmall};
      }

      &:last-child {
        border-bottom: 0;
      }
    }
  `}
`;

export const Remove = styled.button`
  ${() => css`
    border-radius: 0.2rem;
    background-color: red;
    padding: 0.4rem 1rem;
    text-align: center;
    background-color: #ffcdd2;
    color: #c62828;
  `}
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 25vh;
  min-height: 25vh;
`;
