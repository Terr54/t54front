import styled from '@emotion/styled';
import { HaveAccount, ShowText } from '../signin/Signin.styles';

export const Container = styled.div``;
export const StyledShowText = styled(ShowText)``;
export const StyledHaveAccount = styled(HaveAccount)``;
export const RadioTexts = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    width: 92%;
  }
`;
export const RadioText = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  span {
    margin-left: 10px;
  }
`;
export const PrivacyText = styled.div`
  display: flex;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 45px;
`;
export const PrivacyAction = styled.span`
  margin-left: 5px;
  color: #e63f07;
  cursor: pointer;
  text-transform: lowercase;
  :hover {
    opacity: 0.6;
  }
`;
export const CookieContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
