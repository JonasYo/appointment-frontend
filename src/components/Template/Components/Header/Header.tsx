import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Burger from './components/Burger/Burger';

import { Container, ImageWrapper } from './Header.styles';

const Header = () => (
  <Container>
    <Link href="/">
      <ImageWrapper>
        <Image src="/images/logo.png" alt="logo" layout="fill" />
      </ImageWrapper>
    </Link>

    <Burger />
  </Container>
);

export default Header;
