import styled from '@emotion/styled';

export interface blogNavProps {
  activeTab?: boolean;
}

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    height: 3rem
`
export const LinkTab = styled.span<blogNavProps>`
  border-bottom: ${({ activeTab }) =>
    activeTab ? '3px solid #86B817' : 'none'};
  cursor: pointer;
  margin: 0px 18px;
  :nth-child(1) {
    margin-left: 60px;
  }
  transition: 0.1s linear
`;
