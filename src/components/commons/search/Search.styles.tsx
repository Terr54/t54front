import type { InputHTMLAttributes, ChangeEvent, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface SearchPropTypes extends InputHTMLAttributes<HTMLInputElement> {
  [key: string]: any;
  inputStyle?: object;
  containerStyle?: object;
  className?: string;
  name?: string;
  noBorder?: boolean;
  onChange?: (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  placeholder?: string;
  width?: string | number;
  margin?: string | number;
  renderIcon?: () => ReactNode;
  children?: ReactNode | ReactNode[];
}

export const StyledInputContainer = styled.div<SearchPropTypes>`
  align-items: center;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  background-color: rgba(246, 246, 246, 1) ;
  border: none;
  cursor: text;
  padding: 3px 6px;
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex: 1 1 100%;
  font-size: inherit;
  justify-content: space-between;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  word-wrap: break-word;
  vertical-align: top;
  pointer-events: auto;
  position: relative;
  margin: 5px;
  :focus-within {
    border-color: #D1D1D1;
  }
`;

export const StyledInput = styled.input`
  background-color: transparent;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  cursor: inherit;
  font-size: 12px;
  padding: 5px;
  min-width: 0;
  outline: none;
  width: 100%;
  line-height: 1.4285714285714286;
  ::placeholder {
    font-size: 12px;
    color: #D1D1D1;
  }
`;

export const Container = styled.div<SearchPropTypes>`
width: 100%;
margin: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}%`)};
display: flex;
justify-content: center;
`
export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: transparent;
  border: none;
  color: rgba(102, 102, 102, 1);
`
