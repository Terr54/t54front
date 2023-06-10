import React from 'react';
import { Container, Content, Header, Heading, modalWrapperProps, StyledClose } from './ModalWrapper.styles';

const ModalWrapper = ({
  children,
  height = '73vh',
  width = '35%',
  borderRadius = '12px',
  padding = '20px',
  margin,
  showModal,
  onClose,
  onClick,
  heading,
  headerMargin = '0px 0px 12px',
  showHeader = true,
  showClose = true,
  style
}: modalWrapperProps) => {
  return (
    <>
    {
      showModal && (
        <Container onClick={onClick} style={style}>
          <Content
            height={height}
            width={width}
            borderRadius={borderRadius}
            padding={padding}
            margin={margin}
          >
        <Header headerMargin={headerMargin}>
          {showHeader && (
            <Heading>{heading}</Heading>
          )}
          {
            showClose && <StyledClose onClick={onClose} />
          }
        </Header>
        {children}
      </Content>
    </Container>
      )
    }
    </>

  );
};

export default ModalWrapper;
