import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const FormContainer = styled.div`
  background: white;
  color: #493d39;
  min-width: 36vw;
  height: 100%;
  padding: 40px;
  margin-left: 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;
export const FormDetails = styled.div`
  height: 100%;
`;
export const ContactDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContactDetailContainer = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  div > spans {
    font-weight: bold;
  }
`;

export const Title = styled.span`
  color: #fff;
  font-weight: bold;
  margin-left: 6px;
`;
export const Value = styled.span`
  font-size: 12px;
  margin-top: 15px;
`;
export const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: space-between;
  width: 30%;
  margin: 50px 0px;
`;
export const Heading = styled.h1`
  color: white;
`;
export const StyledLink = styled.a`
  color: white;
  cursor: pointer;
`;
export const ContactInfos = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
