import styled from '@emotion/styled';
// import { Link } from 'react-router-dom';

export interface footerColumnProps {
  values: Array<{
    id: number | any;
    label: string;
    to: string;
  }>;
  heading: string;
  comingSoon?: boolean;
  onClick?: () => void
  isBlog?: boolean
}

export const Container = styled.div`
  position: relative;
  bottom: 0px;
  display: grid;
  grid-template-columns: 1fr 0.3fr 0.3fr 0.3fr;
   @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  };
`;

export const ColumnContainer = styled.div`
  color: #fff;
  p {
    font-size: 13px;
    cursor: pointer;
  }
  h1 {
    margin: 0px;
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  p:hover {
    opacity: 0.9
  }
`;
export const SoonTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 4px;
  background-color: rgba(246, 249, 237, 1);
  color: rgba(48, 66, 8, 1);
  font-size: 8px;
  margin-left: 6px;
  border-radius: 3px;
`;
export const StyledFooterLink = styled.a`
  color: inherit;
  text-decoration: none;
`;
