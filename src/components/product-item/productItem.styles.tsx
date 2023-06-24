import styled from '@emotion/styled';
import { black, grey800 } from '../../assets/styles/colors';

export interface productItemProps {
  title?: string;
  company?: string;
  country?: string;
  countryFlag?: string;
  bgImage?: string;
  price?: {
    currency?: string;
    amount?: number;
    unit?: string;
  };
  width?: string | number;
  height?: string | number;
  coverHeight?: string | number;
  coverWidth?: string | number;
  style?: object;
  onClick?: () => void;
}

export const ProductCard = styled.div<productItemProps>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const ProductImg = styled.div<productItemProps>`
  width: ${({ coverWidth }) =>
    typeof coverWidth === 'string' ? coverWidth : `${coverWidth}%`};
  height: ${({ coverHeight }) =>
    typeof coverHeight === 'string' ? coverHeight : `${coverHeight}%`};
  border-radius: 12px;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 16px;
  background-position: center;
  @media (max-width: 768px) {
    display: flex;
  }
`;
export const ProductTitle = styled.h3`
  color: ${black};
  width: 200px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
`;
export const ProductCompany = styled.p`
  margin-top: -10px;
  color: ${grey800};
`;
export const ProductOrigin = styled.p`
  margin-top: -10px;
  color: ${black};
  font-weight: 500;
  display: flex;
  align-items: center;
`;
export const ProductCurrency = styled.span`
  color: ${grey800};
  font-size: small;
  margin-top: -10;
  text-transform: uppercase;
`;
export const ProductPrice = styled.span`
  color: ${black};
  font-size: large;
  font-weight: bold;
  margin: 0 5px;
`;
export const Price = styled.p`
  margin-top: -10px;
`;
export const Bookmark = styled.div`
  background-color: ${black};
  padding: 5px;
  border-radius: 50%;
`;
