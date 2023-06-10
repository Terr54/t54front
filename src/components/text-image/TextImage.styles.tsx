import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface textImageProps {
  flexDirection?: string;
  MflexDirection?: string;
  alignItems?: string;
  heading?: string;
  description?: string;
  image?: string;
  margin?: string | number;
  borderRadius?: string | number;
  descriptionText?: () => ReactNode;
}

export const Container = styled.div<textImageProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: ${({ alignItems }) => alignItems ?? 'row'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 50px;
    display: flex;
    flex-direction: ${({ MflexDirection }) => MflexDirection ?? 'column'};
  }
`;
export const Image = styled.div<textImageProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  img {
    width: 30vw;
    height: 50vh;
    border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}%`};
  }
  @media (max-width: 768px) {
    img { 
      width: 85vw;
      height: 30vh;
    }
    margin: auto;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    margin: 0px;
  }
`;
