import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface sectionWrapperProps {
  children: ReactNode | ReactNode[];
  padding?: string;
  bgColor?: string;
  height?: string | number;
  Mheight?: string | number;
  width?: string | number;
  marginTop?: string;
  mPadding?: string;
}

export const Container = styled.div<sectionWrapperProps>`
display: flex;
margin-top: ${({ marginTop }) => marginTop};
flex-direction: column;
background-color: ${({ bgColor }) => bgColor};
  width: ${({ width }) =>
  typeof width === 'string' ? width : `${width}%`};;
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  padding: ${({ padding }) =>
    padding ?? '0px'};
  box-sizing: border-box;
  position: relative;
  @media (max-width: 768px)  {
    padding: ${({ mPadding }) => mPadding};
    width: 100%;
    margin-top: 0px;
    dispaly: flex;
    height: ${({ Mheight }) =>
    typeof Mheight === 'string' ? Mheight : `${Mheight}%`};
    flex-direction: column;
  };
  
`;
