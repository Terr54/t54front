import React from 'react';
import { Container, sectionWrapperProps } from './SectionWrapper.styles';

const SectionWrapper = ({
  children,
  height = '',
  Mheight = '',
  padding = '0px 50px',
  bgColor = '#fff',
  width = '',
  marginTop = '',
  mPadding = '20px'
}: sectionWrapperProps) => {
  return (
    <Container
      padding={padding}
      height={height}
      bgColor={bgColor}
      Mheight={Mheight}
      width = {width}
      marginTop= {marginTop}
      mPadding ={mPadding}
    >
      {children}
    </Container>
  );
};

export default SectionWrapper;
