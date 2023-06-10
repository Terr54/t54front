import styled from '@emotion/styled';

export interface marketplaceNavProps {
  activeTab?: boolean;
  onSelectionChange?: (active?: string) => void,
  showHamburgerMenu?: boolean
  margin?: string | number
}

export const Container = styled.div<marketplaceNavProps>`
  background-color: rgba(246, 246, 246, 1);
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  height: 8vh;
  width: 100%;
  align-items: center;
  display: flex;
  @media (max-width: 768px) {
    overflow: auto;
  };
`
export const Content = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: rgba(102, 102, 102, 1);
  box-sizing: border-box;
  font-size: 13px;
`
export const LinkTab = styled.span<marketplaceNavProps>`
  border-bottom: ${({ activeTab }) =>
    activeTab ? '3px solid #E63F07' : 'none'};
  cursor: pointer;
  margin: 0px 18px;
  :nth-of-type(1) {
    margin-left: 60px;
  }
  transition: 0.1s linear
`;
