import React from 'react';

import { Container, Copyright } from './Footer.styles';

const Footer = () => (
  <Container>
    <Copyright fadeIn>
      Desenvolvido por <b>Jonas Siqueira Marcelino</b>
    </Copyright>
    <Copyright fadeIn>© Copyright 2021.</Copyright>
  </Container>
);

export default Footer;
