import styled from '@emotion/styled';
import CloseIcon from '@mui/icons-material/Close';
import LinkIcon from '@mui/icons-material/Link';

export const Container = styled.div``;
export const Form = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: 67vh;
  border-radius: 8px;
  width: 512px ;
  margin: 15px auto;
  position: relative;
`;
export const Heading = styled.h3`
  margin: 0px;
`;
export const HeadingClose = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StyledClose = styled(CloseIcon)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.07);
  color: #E63F07;
  border-radius: 50%;
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
`
export const StyledLink = styled(LinkIcon)`
  transform: rotate(-45deg);
  font-size: 19px;
`
