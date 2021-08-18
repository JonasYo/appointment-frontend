import React from 'react';

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import theme from '@styles/themes/default';
import GlobalStyle from '@styles/globals.styles';

import AppProvider from '@hooks/index';

import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_NAME,
  SITE_URL,
} from '../src/constants/env';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
    </Head>

    <NextSeo
      title={SITE_TITLE}
      description={SITE_DESCRIPTION}
      canonical={SITE_URL}
      openGraph={{
        url: SITE_URL,
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        images: [{ url: SITE_IMAGE }],
        site_name: SITE_NAME,
        locale: 'pt_BR',
      }}
    />
    <GlobalStyle />

    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </ThemeProvider>
);

export default App;
