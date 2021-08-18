import styled from 'styled-components';
import GeneralStyles from '@styles/themes/default';

const { patterns, mediaQuery } = GeneralStyles;

export const Container = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  padding: 1rem;

  ${mediaQuery.tabletMediaQuery} {
    padding: ${patterns.tabletPadding};
  }
  ${mediaQuery.desktopMediaQuery} {
    padding: ${patterns.desktopPadding};
  }
  ${mediaQuery.extraDesktopMediaQuery} {
    padding: ${patterns.extraDesktopPadding};
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 14vh;
  max-height: 5vh;
`;
