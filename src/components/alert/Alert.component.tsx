import React from 'react';
import { alertProps, Container, IconText } from './Alert.styles';

const Alert = ({
  onClose,
  text,
  renderIconLeft,
  renderIconRight,
  color = '#06295C',
  bgColor = '#ECF4FF',
  width = '',
  height,
  borderRadius = '10px',
  padding = '20px',
  fontSize = '13px',
  border = 'none',
  style,
  children,
  margin = '30px 44px 0px',
  ...props
}: alertProps) => {
  return (
  <Container onClick={onClose} bgColor={bgColor} padding={padding} borderRadius={borderRadius} color={color} width={width} margin={margin} {...props}>
    <IconText>
      {renderIconLeft?.()}
      <span>{text}</span>
    </IconText>
    <div style={{ cursor: 'pointer' }} onClick={onClose}>
      {renderIconRight?.()}
    </div>
  </Container>);
};

export default Alert;
