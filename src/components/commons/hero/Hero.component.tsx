import React from 'react';
import { Container, heroProps } from './Hero.styles';

const Hero = ({ bgImage, children, color = '#fff' }: heroProps) => {
  return (
      <Container bgImage={bgImage} color={color}>
        {children}
      </Container>
  );
};

export default Hero;
