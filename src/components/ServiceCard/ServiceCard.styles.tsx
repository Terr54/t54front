import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface serviceCardProps {
  bgColor?: string;
  padding?: string | number;
  margin?: string | number;
  marginMobile?: string | number;
  width?: string | number;
  height?: string | number;
  heightMobile?: string | number;
  borderRadius?: string | number;
  renderIcon?: () => ReactNode;
  children?: ReactNode | ReactNode[];
}

export const Container = styled.div<serviceCardProps>`
display: flex;
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  position: relative;
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  :hover {
    box-shadow: 0px 0px 2px 3px rgba(0, 0, 0, 0.02);
    transition: 0.3s ease-in;
  }
   @media (max-width: 768px) {
    width: 300px;
    font-size: 12px;
    height: ${({ heightMobile }) =>
  typeof heightMobile === 'string' ? heightMobile : `${heightMobile}%`};
   margin: ${({ marginMobile }) =>
  typeof marginMobile === 'string' ? marginMobile : `${marginMobile}%`};
  };
`;
