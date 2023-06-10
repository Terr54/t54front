import React from 'react';
import {
  InputPropTypes,
  StyledInputContainer,
  StyledInput,
  ErrorContainer,
  ErrMessage
} from './Input.styles';

const InputDropdown = ({
  inputStyle,
  containerStyle,
  hasError,
  className,
  errorFound = false,
  onChange,
  renderIcon,
  placeholder,
  errorMessage,
  width,
  children,
  ...props
}: InputPropTypes) => (
  <>
    <StyledInputContainer
      width={width}
      className={className}
      hasError={hasError}
      style={containerStyle ?? {}}
    >
      <StyledInput
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle ?? {}}
        {...props}
      />
      {renderIcon?.()}
      {children}
    </StyledInputContainer>
    <ErrorContainer>
      {errorFound && (
        <ErrMessage>{errorMessage}</ErrMessage>
      )}
    </ErrorContainer>
  </>
);

export default InputDropdown;
