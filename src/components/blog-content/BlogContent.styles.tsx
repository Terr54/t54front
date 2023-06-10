import styled from '@emotion/styled';

export interface blogContentProps {
  path?: string;
  heading?: string;
  caption?: string;
  author?: string;
  date?: string;
  coverImg?: string;
  contentText?: string;
}

export const Container = styled.div`
`;

export const Image = styled.div`
  width: 88%;
  height: 37vw;
  img {
    width: 100%;
    height: 100%;
  }
`;
export const BlogTextContent = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: 1fr 0.3fr;
`;
export const ParagraphText = styled.div`
  width: 96%;
  display: flex;
  align-items: center;
  p {
    word-break: break-word;
    text-align: justify
  }
`;
