import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

export interface modalWrapperProps {
  children?: ReactNode | ReactNode[];
  padding?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  showModal?: boolean;
  onClose?: () => void;
  onClick?: () => void;
  showClose?: boolean;
  showHeader?: boolean;
  heading?: string;
  headerMargin?: string | number;
  style?: Object;
}

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 1000;
  left: 0px;
`;
export const Content = styled.div<modalWrapperProps>`
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div<modalWrapperProps>`
  display: flex;
  justify-content: space-between;
  margin: ${({ headerMargin }) =>
    typeof headerMargin === 'string' ? headerMargin : `${headerMargin}%`};
  width: 100%;
`;
export const Heading = styled.h3`
  margin: 0px;
`;
export const StyledClose = styled(CloseIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.07);
  color: #e63f07;
  border-radius: 50%;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
