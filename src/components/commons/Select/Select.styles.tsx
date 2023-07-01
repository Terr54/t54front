import { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

export type OptionSelect = { option: string, value?: string };
export interface SelectProps {
  text?: string;
  width?: string | number;
  bgColor?: string;
  isVisible?: boolean;
  value?: string;
  onOptionSelect?: (option?: OptionSelect) => void;
  label?: string;
  values?: OptionSelect[];
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
  dropdownListStyle?: CSSProperties;
  placeholder?: string;
}

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const DropDownHeader = styled.div<SelectProps>`
  background-color: ${({ bgColor }) => bgColor};
  font-size: 20px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: black
`;

export const Heading = styled.h6`
  margin: 0px;
  margin-right: 4px;
`;

export const DropDownList = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
`;

export const ListItem = styled.div<{active?: boolean}>`
  color: ${({ active }) => (active ? '#888' : '#000')};
  font-size: 12px;
  margin: 5px 0px;
  border-radius: 2px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: center;
  cursor: pointer;
  :hover {
    transition: 0.2s ease-in;
  }
`;
