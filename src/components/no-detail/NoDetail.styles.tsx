import styled from '@emotion/styled';

export interface noDetailProps {
  infoText?: string;
  text?: string;
  onClick?: () => void;
  height?: string | number;
  renderIcon?: () => React.ReactNode;
  iconAfter?: boolean;
  color?: string;
  border?: string;
  bgColor?: string;
  textMargin?: string;
}

export const Container = styled.div<noDetailProps>`
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  background-color: white;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;
export const Note = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  p {
    width: 50%;
    text-align: center;
  }
`;
export const Image = styled.div`
  height: 50px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
