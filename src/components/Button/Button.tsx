import React, { ButtonHTMLAttributes } from 'react';

import Container from './Button.styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  primary?: boolean;
};

const Button = ({ children, loading, ...rest }: ButtonProps) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
