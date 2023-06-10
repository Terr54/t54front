import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface authFormProps {
  heading?: string;
  subheading?: string;
  children?: ReactNode | ReactNode[];
  formHeight?: string | number;
}

export const Container = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin-top: 10vh;
  @media screen and (max-width: 767px) {
    min-height: 100vh;
    margin-top: 8vh;
  }
`;
export const Heading = styled.h2`
  margin: 0px;
  margin-bottom: 20px;
`;
export const SubHeading = styled.h4`
  margin: 0px;
  margin-bottom: 25px;
`;
export const Content = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #e5e5e5;
  margin: 15px auto;
  min-width: 512px;
  @media screen and (max-width: 767px) {
    min-width: 90vw;
  }
`;
export const AuthForm = styled.div<authFormProps>`
  padding: 24px;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  ${({ formHeight }) =>
    formHeight
      ? `height: ${
          typeof formHeight === 'string' ? formHeight : `${formHeight}%`
        };`
      : ''}
  border-radius: 8px;
`;
