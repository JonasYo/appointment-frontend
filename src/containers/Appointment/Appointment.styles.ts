import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { mediaQuery, patterns } }) => css`
    padding: 2.5rem 2.5rem 2.5rem 2.5rem;

    ${mediaQuery.tabletMediaQuery} {
      padding: ${patterns.tabletPadding};
      background: unset;
    }
    ${mediaQuery.desktopMediaQuery} {
      padding: ${patterns.desktopPadding};
      background: unset;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      padding: ${patterns.extraDesktopPadding};
      background: unset;
    }
  `}
`;

export const Content = styled.div``;

export const CalendarWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    padding: 2rem 0;

    ${mediaQuery.tabletMediaQuery} {
    }
    ${mediaQuery.desktopMediaQuery} {
    }
    ${mediaQuery.extraDesktopMediaQuery} {
    }
  `}
`;

export const ScheduleWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    padding: 0 0 1rem;

    ${mediaQuery.tabletMediaQuery} {
    }
    ${mediaQuery.desktopMediaQuery} {
    }
    ${mediaQuery.extraDesktopMediaQuery} {
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
