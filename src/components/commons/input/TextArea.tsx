import React from 'react';
import { textAreaProps, TextAreaContainer, Label, TextAreaInput, ErrorContainer, ErrMessage } from './Input.styles';

const TextArea = ({
  text,
  placeholder,
  label,
  hasError,
  width = '100%',
  height = '15vh',
  padding = '10px',
  value,
  onChange,
  errorMessage,
  ...props
}: textAreaProps) => {
  return (
    <>
    <Label><span>{ label }</span></Label>
    <TextAreaContainer hasError={hasError} {...props}>
      <TextAreaInput hasError={hasError} padding={padding} placeholder={placeholder} width={width} height={height} onChange={onChange} value={value}>
        {text}
      </TextAreaInput>
      <ErrorContainer>
      {hasError && (
        <ErrMessage>{errorMessage}</ErrMessage>
      )}
    </ErrorContainer>
    </TextAreaContainer>
    </>
  );
};

export default TextArea;
