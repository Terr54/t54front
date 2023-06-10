import styled from '@emotion/styled';

export interface supplierCardProps {
  title?: string;
  supplierLogo?: string;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 15px;
  margin: 10px 6px;
  cursor: pointer
`;

export const Image = styled.div`
  width: 13vw;
  height: 13vw;
  border-radius: 50%;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
