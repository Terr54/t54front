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
  margin = '5px 0',
  label,
  type,
  value,
  children,
  iconAfter,
  pointerEvents,
  ...props
}: InputPropTypes) => (
  <Container margin={margin}>
    {label && <Label> <span>{ label }</span></Label>}
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
