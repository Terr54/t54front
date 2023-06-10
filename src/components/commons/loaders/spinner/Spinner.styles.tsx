import styled from '@emotion/styled';

export interface SpinnerPropType {
  size?: number;
  animationDuration?: number;
  fillColor?: string;
  strokeColor?: string;
  [key: string]: any;
}
export const StyledSpinner = styled.div<SpinnerPropType>`
  border: ${({ size, fillColor }) => `${size ?? 16}px solid ${fillColor}`};
  border-top: ${({ size, strokeColor }) =>
    `${size ?? 16}px solid ${strokeColor}`};
  border-radius: 50%;
  height: ${({ size }) => (size ? size * 7.5 : 120)}px;
  width: ${({ size }) => (size ? size * 7.5 : 120)}px;
  animation: spin ${({ animationDuration }) => animationDuration ?? 2}s linear
    infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
