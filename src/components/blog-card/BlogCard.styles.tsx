import styled from '@emotion/styled';

export interface blogCardProps {
  heading?: string;
  caption?: string;
  bgImage?: string;
  date?: string;
  tradeType?: string;
  width?: string | number;
  height?: string | number;
  margin?: string | number;
  coverHeight?: string | number;
  coverWidth?: string | number;
  style?: object;
  showCaption?: boolean;
  onClick?: () => void
}

export const Container = styled.div<blogCardProps>`
  color: black;
  cursor: pointer;
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
`;
export const CoverSection = styled.div<blogCardProps>`
  background-image: url(${(props) => props.bgImage});
  width: ${({ coverWidth }) =>
  typeof coverWidth === 'string' ? coverWidth : `${coverWidth}%`};
  height: ${({ coverHeight }) =>
  typeof coverHeight === 'string' ? coverHeight : `${coverHeight}%`};
  background-size: cover;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 100%;
  };
`;
export const DescriptionSection = styled.div`
padding-top: 8px;
span {
    font-size: 13px;
    color: #7C6861
}
`;
