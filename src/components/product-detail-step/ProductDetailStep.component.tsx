import React from 'react';
import {
  Container,
  stepProps
} from './ProductDetailStep.styles';

const ProductDetailStep = ({ step, active, onClick }: stepProps) => {
  return (
    <Container active={active} onClick={onClick}>
      {step}
    </Container>
  );
};

export default ProductDetailStep;
