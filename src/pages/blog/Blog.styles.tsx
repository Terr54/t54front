import styled from '@emotion/styled';

export const Container = styled.div`

`;

export const BlogsMultiple = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    @media (max-width: 768px) {
    grid-template-columns: 1fr;
  };
`
