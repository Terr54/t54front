import type { InputHTMLAttributes, ChangeEvent, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface InputPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  hasError?: boolean;
  disabled?: boolean;
  inputStyle?: object;
  containerStyle?: object;
  className?: string;
  name?: string;
  label?: string;
  type?: string;
  errorMessage?: string;
  noBorder?: boolean;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  placeholder?: string;
  width?: string | number;
  margin?: string | number;
  renderIcon?: () => ReactNode;
  renderIconLeft?: () => ReactNode;
  children?: ReactNode | ReactNode[];
  iconAfter?: boolean;
  value?: string | number;
  pointerEvents?: string;
  subLabel?: string;
}

export interface textAreaProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  hasError?: boolean;
  errorMessage?: string;
  children?: ReactNode | ReactNode[];
  width?: string | number;
  height?: string | number;
  padding?: string | number;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const StyledInputContainer = styled.div<InputPropTypes>`
  align-items: center;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  background-color: ${({ hasError }) =>
    hasError
      ? 'var(--color-danger-tint)'
      : 'var(--input-text-bg-color-prestine)'};
  border: 1px solid rgb(223, 225, 230);
  cursor: text;
  padding: 0px 4px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  font-size: inherit;
  justify-content: space-between;
  /* overflow: hidden; */
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  word-wrap: break-word;
  vertical-align: top;
  pointer-events: auto;
  position: relative;
  :focus-within {
    border-color: ${({ hasError }) =>
      hasError ? 'var(--color-danger-tint)' : 'rgba(134, 184, 23, 1)'};
  }
`;

export const StyledInput = styled.input<InputPropTypes>`
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  color: ${({ pointerEvents }) =>
    pointerEvents === 'none' ? 'rgba(188, 176, 173, 1)' : 'inherit'};
  cursor: inherit;
  font-size: 14px;
  padding: 8px;
  min-width: 0;
  outline: none;
  width: 100%;
  pointer-events: ${({ pointerEvents }) => pointerEvents};
  line-height: 1.4285714285714286;
  ::placeholder {
    font-size: 10px;
    color: rgba(188, 176, 173, 1);
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
`;
export const ErrMessage = styled.span`
  color: rgb(178, 44, 80);
  align-self: center;
`;

export const TextAreaContainer = styled.div<textAreaProps>`
  width: 100%;
  margin-bottom: 30px;
  border-color: ${({ hasError }) =>
    hasError ? 'var(--color-danger-tint)' : 'rgba(134, 184, 23, 1)'};
  color: ${({ hasError }) => (hasError ? 'var(--color-danger-tint)' : 'black')};
  position: relative;
  display: flex;
  justify-content: center;
`;

export const TextAreaInput = styled.textarea<textAreaProps>`
  width: ${({ width }) => (typeof width === 'string' ? width : '98%')};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  border: 1px solid rgb(223, 225, 230);
  margin-top: 4px;
  border-radius: 6px;
  ::placeholder {
    color: rgba(188, 176, 173, 1);
    font-size: 10px;
  }
  :focus {
    border-color: ${({ hasError }) =>
      hasError ? 'var(--color-danger-tint)' : 'rgba(134, 184, 23, 1)'};
    outline: none;
  }
`;

export const Label = styled.div`
  width: 100%;
  font-size: 13px;
  padding: 5px 0;
  text-align: left;
`;

export const Container = styled.div<InputPropTypes>`
  width: 100%;
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
`;
