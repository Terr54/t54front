import styled from '@emotion/styled';

export interface selectDocProps {
  text?: string;
  checked?: boolean;
  onView?: () => void;
  onClick?: () => void;
}

export const Container = styled.div`
display: flex;
align-items: center;
margin: 10px 0px;
`
export const Span = styled.span`
 color: #E63F07;
 font-size: 11px;
 font-weight: 400;
 margin: 0px 6px;
`
