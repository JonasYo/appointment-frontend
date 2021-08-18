import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  className?: string;
  children: any;
}

const Tooltip = ({ title, className = '', children }: TooltipProps) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default Tooltip;
