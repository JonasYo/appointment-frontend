import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    .selected {
      color: #efefff;

      background-color: #2e2f2e;
      background-color: ${colors.purple};

      border-radius: 20px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
  `}
`;

export const TextWrapper = styled.div`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const HoursWrapper = styled.div`
  ${({ theme: { mediaQuery } }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 12px;

    ${mediaQuery.tabletMediaQuery} {
      grid-template-columns: repeat(9, 1fr);
    }
    ${mediaQuery.desktopMediaQuery} {
      grid-template-columns: repeat(9, 1fr);
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      grid-template-columns: repeat(9, 1fr);
    }
  `}
`;

export const HourWrapper = styled.div`
  text-align: center;
  padding: 4px;

  .selected {
    color: #efefff;
    background-color: #2e2f2e;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;
