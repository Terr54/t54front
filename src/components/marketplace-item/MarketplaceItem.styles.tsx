import styled from '@emotion/styled';

export interface marketplaceItemProps {
  heading?: string;
  caption?: string;
  itemImage?: string;
  width?: string;
  onClick?: () => void;
}

export const Container = styled.div<marketplaceItemProps>`
  display: flex;
  justify-content: space-between;
  width: ${({ width }) => width};
`;
export const Image = styled.div``;
