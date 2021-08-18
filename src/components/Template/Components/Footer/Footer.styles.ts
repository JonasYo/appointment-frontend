import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const {
  font: { sizes },
  patterns,
  spacings,
  mediaQuery,
} = GeneralStyles;

export const Container = styled.div`
  padding: ${patterns.mobilePadding};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mediaQuery.tabletMediaQuery} {
    padding: 0;
    margin: ${spacings.large};
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: 0;
    margin: ${spacings.large};
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: 0;
    margin: ${spacings.large};
  }
`;

export const Copyright = styled.p`
  font-weight: 400;
  text-align: center;
  font-size: ${sizes.small};
  margin: ${spacings.small};

  ${mediaQuery.tabletMediaQuery} {
    font-size: ${sizes.small};
    text-align: left;
  }
  ${mediaQuery.desktopMediaQuery} {
    font-size: ${sizes.small};
    text-align: left;
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    font-size: ${sizes.medium};
    text-align: left;
  }
`;
