import React from 'react';
import { Container, serviceCardProps } from './ServiceCard.styles';

const ServiceCard = ({
  bgColor,
  padding = '26px',
  width = '22vw',
  heightMobile = '30vh',
  height = '',
  borderRadius = '12px',
  margin = '0px 8px',
  marginMobile = '8px 0px',
  renderIcon,
  children
}: serviceCardProps) => {
  return (
    <Container
      bgColor={bgColor}
      heightMobile={heightMobile}
      padding={padding}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
      marginMobile={marginMobile}
    >
      {children}
      {renderIcon?.()}
    </Container>
  );
};

export default ServiceCard;
