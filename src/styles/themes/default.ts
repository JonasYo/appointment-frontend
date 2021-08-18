export default {
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: '#ffffff',
    beautyBush: '#E6B8B7',
    aliceBlue: '#F6F9FC',
    red: '#c53030',
    lightGrey: '#bebebe',
    grey: '#888888',
    darkGrey: '#2e2f2e',
    lightPurple: '#8e5aa8',
    purple: '#5b257b',
    blueCharcoal: '#212529',
  },
  font: {
    family: 'Inter',
    sizes: {
      xxsmall: '1.125rem',
      xsmall: '1.4rem',
      small: '1.875rem',
      xmedium: '2.25rem',
      medium: '2.475rem',
      large: '3rem',
      xlarge: '3.5rem',
      xxlarge: '4rem',
    },
  },
  mediaQuery: {
    smallMobileMediaQuery: '@media only screen and (max-width: 320px)',
    mobileMediaQuery: '@media only screen and (max-width: 599px)',
    tabletMediaQuery: '@media only screen and (min-width: 600px)',
    smallDesktopMediaQuery: '@media only screen and (min-width: 960px)',
    desktopMediaQuery: '@media only screen and (min-width: 1200px)',
    extraDesktopMediaQuery: '@media only screen and (min-width: 1800px)',
  },
  patterns: {
    mobilePadding: '6rem calc(1.6rem)',
    tabletPadding: '0.5rem calc((100vw - 100px) / 8)',
    desktopPadding: '0.5rem calc((100vw - 1000px) / 3)',
    extraDesktopPadding: '0.5rem calc((100vw - 1000px) / 3)',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '6.0rem',
    xlarge: '6.4rem',
    xxlarge: '12.8rem',
  },
  border: {
    radius: '0.4rem',
  },
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
};