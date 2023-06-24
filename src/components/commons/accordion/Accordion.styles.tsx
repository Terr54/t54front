import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface accordionProps {
  open?: boolean;
  onClick?: () => void;
  onClose?: () => void;
  text?: any;
  heading?: string;
  children?: ReactNode | ReactNode[];
  //   texts?: Array<{
  //     id?: string | number;
  //     heading?: string;
  //     text?: string
  //   }>;
  texts?: any
}

export const Header = styled.div`
  display: flex;
  background-color: #fff;
  border-bottom: 1px solid #e8e8e8;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0px;
  cursor: pointer;
  :hover {
    opacity: 0.85;
  }
`;
export const Content = styled.div`
  p {
    text-align: justify;
    width: 91%;
  };
  transition: 0.5s linear;
`;
