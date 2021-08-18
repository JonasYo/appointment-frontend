import React from 'react';

import Container from './Subtitle.styles';

const Subtitle = ({ children, ...rest }: any) => <Container {...rest}>{children}</Container>;

export default Subtitle;
