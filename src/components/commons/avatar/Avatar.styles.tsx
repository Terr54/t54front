import styled from '@emotion/styled';

export interface avatarProps {
  src?: string;
  bgColor?: string;
  onClick?: () => void;
  padding?: string | number;
  margin?: string | number;
  size?: string | number;
  borderRadius?: string | number;
  style?: object;
  border?: string | number;
  detailsMargin?: string | number;
  paddingLeft?: string | number;
  username?: string;
  verified?: boolean;
  renderButton?: () => React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string
}

export const Main = styled.div<avatarProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: ${({ paddingLeft }) => paddingLeft};
`;
export const Details = styled.div<avatarProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${({ detailsMargin }) => detailsMargin};
  h2 {
    margin: 0;
    margin-right: 12px;
  }
`;
export const Container = styled.label<avatarProps>`
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  border: ${({ border }) => border};
  width: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
  height: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  img {
    width: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
    height: ${({ size }) => (typeof size === 'string' ? size : `${size}%`)};
    border-radius: ${({ borderRadius }) =>
      typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  }
`;

export const Upload = styled.input`
  display: none;
`
