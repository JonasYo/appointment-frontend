import { createGlobalStyle } from 'styled-components';

import GeneralStyles from '@styles/themes/default';

const { font, colors } = GeneralStyles;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
    font-weight: 400;
    font-style: normal
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  html {
    font-family: ${font.family} sans-serif;
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    background-color: ${colors.white};
    color: ${colors.darkGrey};
  }
}
`;

export default GlobalStyle;
