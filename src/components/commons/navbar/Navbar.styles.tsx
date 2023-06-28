import styled from '@emotion/styled';
import Button from '../controls/button/Button.component';

export interface navbarProps {
  activeTab?: boolean;
  showHamburgerMenu?: boolean;
  showCartIcon?: boolean;
  showProfile?: boolean;
  showLogo?: boolean;
  logoItemsWidth?: string;
  width?: string;
  isLoggedIn?: boolean;
}

export const NavContainer = styled.div<navbarProps>`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 0 15px;
  height: 10vh;
  width: ${({ width }) => width ?? '100%'};
  box-sizing: border-box;
  z-index: 1000;
  width: 100%;
  @media screen and (max-width: 768px) {
   padding: 0;
   height: 8vh;
  }
`;
export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
export const LinkTab = styled.span<navbarProps>`
  color: ${({ activeTab }) => (activeTab ? '#E63F07' : '')};
  cursor: pointer;
  margin: 0px 18px;
  :nth-of-type(1) {
    margin-left: 60px;
  };
  transition: 0.1s linear;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    margin-bottom: 50px;
    font-size: 30px;
  }
`;

export const StyledNavButton = styled(Button)`
  margin: 0px 5px;
  min-width: 120px;
  @media screen and (max-width: 767px) {
    margin: 10px 0
  }
`;
export const LoggedHeader = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  box-sizing: border-box;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;
export const LoggedItems = styled.div<navbarProps>`
  display: flex;
  width: ${({ logoItemsWidth }) => logoItemsWidth ?? '26%'};
  align-items: center;
  justify-content: space-between;
`;
export const CartItems = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: #f6f6f6;
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Summaries = styled.div`
  width: 100%;
  margin-top: 5rem;
  color: #000;
`;
export const Summary = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0px;
`;
