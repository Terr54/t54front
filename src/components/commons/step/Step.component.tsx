import React from 'react';
import {
  Container,
  Count,
  Hairline,
  Line1,
  Line2,
  stepProps
} from './Step.styles';

const Step = ({ step, active, onClick }: stepProps) => {
  return (
    <Container onClick={onClick}>
      <Count active={active}>{step}</Count>
      <Hairline>
        <Line1 active={active} />
        <Line2 />
      </Hairline>
    </Container>
  );
};

export default Step;
