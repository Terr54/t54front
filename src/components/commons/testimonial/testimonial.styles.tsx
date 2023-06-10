import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface testimonialProps {
  text?: string;
  username?: string;
  occupation?: string;
  children?: ReactNode | ReactNode[];
}

export const Container = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px
`;
export const Image = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Text = styled.p`
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
  margin: 20px;
`;
