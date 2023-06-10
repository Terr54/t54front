import styled from '@emotion/styled';

interface LogoProps {
  height: number;
  width: number;
}

export const StyledLogoBox = styled.div<LogoProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

export const StyledLogo = styled.img`
    width: 100%;
    height: 100%;
    cursor:pointer;
`;
