import styled from '@emotion/styled';

export interface stepProps {
  active?: boolean;
  step?: string;
  onClick?: () => void;
}

export const Container = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    cursor: pointer;
`
export const Count = styled.div<stepProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 5px;
   border: ${({ active }) => active ? '1.5px solid #86B817' : '1.5px solid #D1D1D1'};
   border-radius: 50%;
   width: 10px;
   height: 10px;
   font-size: 10px;
   color: #666666
`
export const Hairline = styled.div`
   height: 2.5px;
   width: 40px;
   display: grid;
   grid-template-columns: 1fr 0.4fr;
   margin: 0px 1px;
`
export const Line1 = styled.div<stepProps>`
   width: 100%;
   height: 100%;
   background-color: ${({ active }) => active ? '#86B817' : '#D1D1D1'};
   border-radius: 5px 0px 0px 5px;

`
export const Line2 = styled.div`
   width: 100%;
   height: 100%;
   background-color: #D1D1D1;
   border-radius: 0px 5px 5px 0px;

`
