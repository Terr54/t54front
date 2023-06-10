import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface videoPresentationProps {
  // videoImg?: HTMLVideoElement;
  videoImg?: string;
  heading?: string;
  caption?: string;
  flexDirection?: string;
  renderIcon?: () => ReactNode;
  color?: string;
  children?: ReactNode | ReactNode[];
  isVideo?: boolean;
  content?: ReactNode;
  bgImage?: string;
}

export const Container = styled.div<videoPresentationProps>`
  width: 100%;
  display: flex;
  margin: auto;
  align-items: center;
  flex-direction: ${({ flexDirection }) => flexDirection};
  box-sizing: border-box ;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 60vh;
    color: black;
  };
  
`;
export const VideoContainer = styled.div`
margin-right: 20px;
@media (max-width: 768px) {
    margin-right: 0px;
  };
`;

export const Heading = styled.div`
  font-size: 25px;
  align-items: center;
  display: flex;
  width: 100%;
  white-space: pre-wrap;
  word-wrap: break-word;
  & > h1 {
    margin: 0px;
  }
`;
export const Caption = styled(Heading)`
  font-size: 16px;
  width: 50%;
  & > p {
    margin: 18px 0px;
  }
`;
export const Content = styled.div<videoPresentationProps>`
  background-image: ${({ bgImage }) => `url(${bgImage})`} ;
  width: 50vw;
  height: 58vh;
  background-size: cover
`;
