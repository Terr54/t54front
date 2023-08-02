import { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

export type OptionSelect = {
  option: string; value?: string ; image?: string
};
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
  margin-bottom: 10px;
`;

export const DropDownHeader = styled.div<SelectProps>`
  background-color: ${({ bgColor }) => bgColor};
  font-size: 20px;
  padding: 12px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  color: black;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.04);
  margin-bottom: 4px;
  margin: 0px 4px;
`;

export const Heading = styled.p`
  margin: 0px;
  margin: 0px 6px;
  font-size: 15px;
`;

export const DropDownList = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
`;

export const ListItem = styled.div<{ active?: boolean }>`
  color: ${({ active }) => (active ? '#888' : '#000')};
  font-size: 12px;
  margin: 5px 0px;
  border-radius: 2px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  :hover {
    transition: 0.2s ease-in;
  }
`;
export const ListItemImage = styled.img`
  object-position: center;
  width: 60px;
  height: 60px;
  border-radius: 3px;
  margin-top: 6px;
`;
