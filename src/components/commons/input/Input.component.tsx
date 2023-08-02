import React from 'react';
import {
  InputPropTypes,
  StyledInputContainer,
  StyledInput,
  ErrorContainer,
  ErrMessage,
  Container,
  Label
} from './Input.styles';

const Input = ({
  inputStyle,
  containerStyle,
  hasError,
  className,
  onChange,
  renderIcon,
  renderIconLeft,
  placeholder,
  errorMessage,
  width = '100%',
  margin = '5px 0 10px',
  label,
  type,
  value,
  children,
  iconAfter,
  pointerEvents,
  subLabel,
  ...props
}: InputPropTypes) => (
  <Container margin={margin}>
    {label && <Label>{ label }</Label>}
    {subLabel && <Label>{ subLabel }</Label>}
    <StyledInputContainer
      width={width}
      className={className}
      hasError={hasError}
      style={containerStyle ?? {}}
    >
      {(iconAfter && renderIcon?.()) ?? renderIconLeft?.()}
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        style={inputStyle ?? {}}
        pointerEvents={pointerEvents}
        {...props}
      />
      {!iconAfter && renderIcon?.()}
      {children}
    </StyledInputContainer>
    <ErrorContainer>
      {hasError && (
        <ErrMessage>{errorMessage}</ErrMessage>
      )}
    </ErrorContainer>
  </Container>
);

export default Input;
