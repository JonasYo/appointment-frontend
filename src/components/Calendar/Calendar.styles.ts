import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme: { colors } }) => css`
    .arrow {
      display: flex;
      justify-self: center;
      align-self: center;
    }

    .selected {
      display: grid;
      align-items: center;

      color: #efefff;

      background-color: #2e2f2e;
      background-color: ${colors.purple};

      border-radius: 8px;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

      width: 35px;
      height: 35px;
      border-radius: 50%;
    }
  `}
`;

export const MonthWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 10fr 1fr;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const DatesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 8px;
`;

export const DateWrapper = styled.div`
  margin-top: 8px;
`;

export const DayWrapper = styled.div`
  display: grid;
  text-align: center;
  padding: 4px;
  justify-items: center;
`;

export const Weekday = styled.div``;

export const Date = styled.div``;
