import styled from '@emotion/styled';

export interface stepProps {
  active?: boolean;
  step?: string;
  onClick?: () => void;
}

export const Container = styled.div<stepProps>`
   background-color: ${({ active }) => active ? '#86B817' : '#F0F0F0'};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 12px 16px;
   width: 90px;
   cursor: pointer;
   border-radius: 14px 14px 0px 0px;
   font-size: 11px;
   color: ${({ active }) => active ? 'white' : '#666666'};
   margin-right: 6px;
   :hover {
    opacity: 0.8;
   }
`
