import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface blogContentProps {
  path?: string;
  heading?: string;
  caption?: string;
  author?: string;
  date?: string;
  coverImg?: string;
  contentText?: string;
  children?: ReactNode | ReactNode[];
}

export const Container = styled.div`
  padding-top: 2px;
  @media screen and (max-width: 768px) {
    padding-top: 0px;
  }
`;

export const Image = styled.div`
  width: 88%;
  height: 30vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 3px;
  }
`;
export const BlogTextContent = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ParagraphText = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  p {
    word-break: break-word;
    text-align: justify;
  }
`;
