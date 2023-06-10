import React from 'react';
import { ButtonPropTypes } from './button.props';
import { StyledButton, Text } from './Button.styles';
import Spinner from '../../loaders/spinner/Spinner.component';

const Button = ({
  onClick,
  text,
  color = '#fff',
  bgColor,
  width,
  height,
  borderRadius = '5px',
  padding = '12px',
  fontSize = '13px',
  border = 'none',
  renderIcon,
  iconAfter = false,
  style,
  loading,
  children,
  margin,
  textMargin = '0px 6px 0px 0px',
  boxShadow = 'none',
  className,
  ...props
}: ButtonPropTypes) => (
  <>
    <StyledButton
    className={className}
      color={color}
      padding={padding}
      border={border}
      bgColor={bgColor}
      width={width}
      height={height}
      onClick={onClick}
      borderRadius={borderRadius}
      style={style}
      margin={margin}
      boxShadow={boxShadow}
      {...props}
    >
      {renderIcon && !iconAfter ? renderIcon() : null}
      {text && <Text fontSize={fontSize} textMargin={textMargin}>{text}</Text>}
      {renderIcon && iconAfter ? renderIcon() : null}
      {loading && <Spinner size={2} strokeColor='#fff' style={{ marginLeft: '4px' }} />}
      {children}
    </StyledButton>
  </>
);

export default Button;
