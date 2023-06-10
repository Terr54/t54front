import styled from '@emotion/styled';

export interface subscriptionProps {
  showModal?: boolean;
  onClose: () => void
}

export const Label = styled.div`
  width: 100%;
  font-size: 13px;
  span {
    padding: 5px 0px;
    text-align: left
  }
`
