import styled from '@emotion/styled';
import { ReactNode } from 'react';
import Button from '../commons/controls/button/Button.component';

export interface carouselProps {
  children?: ReactNode | ReactNode[];
  width?: string | number;
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  height: 100%;
`;
export const CarouselContainer = styled.div`
  overflow: hidden;
`;
export const Inner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;
export const ItemContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export const StyledButton = styled(Button)`
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  z-index: 1000;
`;
export const NavDots = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Dot = styled.div<carouselProps>`
  background-color: ${({ active }) => (active ? '#E63F07' : '#E5E5E5')};
  width: ${({ active }) => (active ? '10px' : '5px')};
  height: 5px;
  border-radius: 40%;
  margin: 0px 1px;
`;
