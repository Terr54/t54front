import { ReactNode } from 'react'
import styled from '@emotion/styled'

export interface notificationProps {
  counter?: string;
  renderIcon?: () => ReactNode;
  onClick?: () => void;
  children?: ReactNode | ReactNode[];
  color?: string;
  bgColor?: string;
  padding?: string;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  cBorderRadius?: string | number;
  cPadding?: string | number;
  cWidth?: string | number;
  cHeight?: string | number;
  cBgColor?: string;
  cColor?: string;
  counterStyle?: Object;
}

export const Container = styled.div<notificationProps>`
  background-color: rgba(249, 249, 249, 1);
  border-radius: 4px;
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  position: relative;
  cursor: pointer;
  :hover {
    opacity: 0.9
  }
`
export const Counter = styled.div<notificationProps>`
  padding: ${({ cPadding }) =>
    typeof cPadding === 'string' ? cPadding : `${cPadding}%`};
  border-radius: ${({ cBorderRadius }) =>
    typeof cBorderRadius === 'string' ? cBorderRadius : `${cBorderRadius}px`};
  background-color: ${({ cBgColor }) => cBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  width: ${({ cWidth }) => (typeof cWidth === 'string' ? cWidth : `${cWidth}%`)};
  height: ${({ cHeight }) =>
    typeof cHeight === 'string' ? cHeight : `${cHeight}%`};
  color: ${({ cColor }) => cColor};
  position: absolute;
  top: -3px;
  right: -3px;
`

export const Icon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
`
