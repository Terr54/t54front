import React, { ReactNode } from 'react';
import { Container, Content } from './Modal.styles';

interface modalProps {
  children?: ReactNode | ReactNode[];
  showModal?: boolean;
  style?: object;
}

const Modal = ({ children, showModal, style }: modalProps) => {
  return (
    <>
      {showModal
        ? (
        <Container style={style}>
          <Content>{children}</Content>
        </Container>
          )
        : null}
    </>
  );
};

export default Modal;
