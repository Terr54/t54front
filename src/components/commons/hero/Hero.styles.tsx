import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface heroProps {
  bgImage: string;
  color?: string;
  children?: ReactNode | ReactNode[];
}

export const Container = styled.div<heroProps>`
  width: 100%;
  height: 100%;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${({ color }) => color};
  opacity: 90%;
  @media (max-width: 768px) {
    height: 80vh;
  };
`;
