import React from 'react';
import Navbar from '../navbar/Navbar.component';
import {
  AuthForm,
  authFormProps,
  Container,
  Content,
  Heading,
  SubHeading
} from './AuthWrapper.styles';

const AuthWrapper = ({
  heading,
  children,
  formHeight,
  subheading
}: authFormProps) => {
  return (
    <>
      <Navbar />
      <Container>
        <Content>
          <AuthForm formHeight={formHeight}>
            <Heading>{heading}</Heading>
            {subheading && <SubHeading>{subheading}</SubHeading>}
            {children}
          </AuthForm>
        </Content>
      </Container>
    </>
  );
};

export default AuthWrapper;
