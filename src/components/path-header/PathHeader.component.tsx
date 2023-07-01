import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  margin: 80px 0px 44px 44px;
  span {
    color: #666666;
  }
`;

interface pathProps {
  path?: string
}

const PathHeader = ({ path }: pathProps) => {
  return (
    <Container>
      <span>{path}</span>
    </Container>
  );
};

export default PathHeader;
