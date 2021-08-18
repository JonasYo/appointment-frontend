import * as React from 'react';
import Head from 'next/head';

import Header from './Components/Header';
import Footer from './Components/Footer';

const Layout = ({ children }) => (
  <div id="layout">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>

    <Header />

    <main>{children}</main>

    {/* <footer>
      <Footer />
    </footer> */}
  </div>
);

export default Layout;
