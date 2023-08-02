import React from 'react';
import { Container, Image, Text, testimonialProps } from './testimonial.styles';
import { QuoteUp } from '../../../assets/svg-icon/QuoteUp';
import { QuoteDown } from '../../../assets/svg-icon/QuoteDown';

const Testimonial = ({ text, children }: testimonialProps) => {
  return (
    <Container>
      <Image>
        <QuoteUp />
      </Image>
      <Text>{text}</Text>
      <Image style={{ marginBottom: '10px' }}>
        <QuoteDown />
      </Image>
      {children}
    </Container>
  );
};

export default Testimonial;
