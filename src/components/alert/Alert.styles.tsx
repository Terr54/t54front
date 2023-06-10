import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface alertProps {
  text?: string;
  bgColor?: string;
  color?: string;
  padding?: string | number;
  margin?: string | number;
  border?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  fontSize?: string | number;
  children?: ReactNode[] | ReactNode;
  style?: object;
  onClose?: () => void
  renderIconLeft?: () => ReactNode;
  renderIconRight?: () => ReactNode;
}

export const Container = styled.div<alertProps>`
    background-color: ${({ bgColor }) => bgColor};
    color: ${({ color }) => color};
    padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
    margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
    border: ${({ border }) => border};
    width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
    height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
    font-size: ${({ fontSize }) =>
    typeof fontSize === 'string' ? fontSize : `${fontSize}px`};
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const IconText = styled.div`
    display: flex;
    align-items: center;
    span {
        margin-left: 18px
    }
`
