import { CSSProperties, ReactNode } from 'react';
import styled from '@emotion/styled';

export interface selectProps {
  text?: string;
  width?: string | number;
  bgColor?: string;
  isVisible?: boolean;
  active?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  values?: string[];
  children?: ReactNode | ReactNode[];
  style?: CSSProperties;
  dropdownListStyle?: CSSProperties;
}

export const PlaceContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
`;

export const DropDownHeader = styled.div<selectProps>`
  background-color: ${({ bgColor }) => bgColor};
  font-size: 20px;
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const Heading = styled.h6`
  margin: 0px;
  margin-right: 4px;
`;

export const PlaceDropDownList = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;
  max-height: 400px;
  overflow-y: auto;
  background: #fff; 
`;

export const PlaceListItem = styled.div<selectProps>`
  color: ${({ active }) => (active ? '#888' : '#000')};
  font-size: 12px;
  margin: 2px 0px;
  border-radius: 2px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    transition: 0.2s ease-in;
  }
`;
