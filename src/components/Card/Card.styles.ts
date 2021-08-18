import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;

  border-radius: 20px;
  cursor: pointer;

  box-shadow: 0 20px 40px 0 rgb(0 0 0 / 10%);
  background-color: transparent;
`;

export const Content = styled.div`
  padding: 10px 20px;
  width: 100%;

  display: flex;
  flex-direction: column;
  place-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const InformationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 0 0;
`;

export const Title = styled.p`
  ${({ theme: { mediaQuery, font, colors } }) => css`
    font-weight: 500;
    text-align: left;
    font-size: ${font.sizes.xsmall};
    margin: 0;
    color: ${colors.grey};

    ${mediaQuery.tabletMediaQuery} {
      font-size: ${font.sizes.small};
    }
    ${mediaQuery.desktopMediaQuery} {
      font-size: ${font.sizes.small};
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      font-size: ${font.sizes.small};
    }
  `}
`;

export const Information = styled.p`
  ${({ theme: { mediaQuery, font } }) => css`
    font-weight: 400;
    text-align: left;
    font-size: ${font.sizes.xsmall};

    ${mediaQuery.tabletMediaQuery} {
      font-size: ${font.sizes.small};
      margin: 16px 0 0 8px;
    }
    ${mediaQuery.desktopMediaQuery} {
      font-size: ${font.sizes.xsmall};
      margin: 16px 0 0 8px;
    }
    ${mediaQuery.extraDesktopMediaQuery} {
      font-size: ${font.sizes.xsmall};
      margin: 16px 0 0 8px;
    }
  `}
`;

export const Price = styled(Information)`
  font-weight: bold;
  margin: 1rem 0 0 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  min-width: 15vh;
  min-height: 15vh;
`;

export const Divider = styled.div`
  border-top: 1px solid #bbb;
  margin: 1rem 0;
`;
