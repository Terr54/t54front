import styled from '@emotion/styled'

export const Container = styled.div`
display: flex;
@media (max-width: 768px) {
    padding-top: 0px;
    flex-direction: column;
  };
  
`
export const ForgetText = styled.div`
  color: #E63F07;
  font-size: 12px;
  justify-self: left;
  width: 100%;
  margin-left: 10px;
  margin-top: 4px;
  cursor: pointer;
  :hover {
   opacity: 0.6;
   }
`
export const ShowText = styled.div`
  font-size: 12px;
  margin-right: 5px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  color: #D1D1D1;
  :hover {
    color: #8c8c8c;
    transition: 0.2s ease-out;
  }
`
export const HaveAccount = styled.div`
    display: flex;
    font-size: 12px;
    span:nth-of-type(2) {
        margin-left: 5px;
        color: #E63F07;
        cursor: pointer;
        :hover {
            opacity: 0.6;
        }
    }
`
