import styled from '@emotion/styled';

export interface likeProps {
  like?: boolean;
  likes?: string;
  dislikes?: string;
  handleLikes?: () => void;
  handleDislikes?: () => void;
  color?: string;
  margin?: string;
}

export const Container = styled.div`
    margin: 0px 6px;
    :hover {
        opacity: 0.9;
        cursor: pointer;
    }
`;
export const Thumb = styled.div`
  display: flex;
  align-items: center;
`;
export const Span = styled.span<likeProps>`
  font-size: 13px;
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin}
`;
