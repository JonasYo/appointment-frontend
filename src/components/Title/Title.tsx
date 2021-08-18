import React from 'react';

import Container from './Title.styles';

const Title = ({ children, ...rest }: any) => <Container {...rest}>{children}</Container>;

export default Title;
