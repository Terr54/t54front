import styled from '@emotion/styled';
import { ButtonPropTypes, radioButtonProps } from './button.props';

export const StyledButton = styled.button<ButtonPropTypes>`
  background-color: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  padding: ${({ padding }) =>
    typeof padding === 'string' ? padding : `${padding}%`};
  margin: ${({ margin }) =>
    typeof margin === 'string' ? margin : `${margin}%`};
  border: ${({ border }) => border};
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  height: ${({ height }) =>
    typeof height === 'string' ? height : `${height}%`};
  border-radius: ${({ borderRadius }) =>
    typeof borderRadius === 'string' ? borderRadius : `${borderRadius}px`};
  text-align: center;
  font-size: var(--btn-primary-font-size);
  display: flex;
  align-items: center;
  cursor: pointer;
  box-shadow: ${({ boxShadow }) => (boxShadow ?? 'var(--box-shadow)')};
  justify-content: center;
  &:hover {
    opacity: 0.85;
  };
  &:disabled {
    background-color: var(--btn-disabled);
    color: var(--color-dark-tint);
    cursor: not-allowed;
    border: none;
  };
  @media (max-width: 768px) {
    width: 50%;
  };
  
`;

export const Text = styled.span<ButtonPropTypes>`
  margin: ${({ textMargin }) => textMargin};
  font-size: ${({ fontSize }) =>
    typeof fontSize === 'string' ? fontSize : `${fontSize}%`};
`;

export const RadioContainer = styled.div<radioButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RButtons = styled.div<radioButtonProps>`
  background-color: rgba(249, 249, 249, 1);
  border-radius: 20px;
  display: flex;
  align-items: center;
`;
export const Option = styled.div<radioButtonProps>`
  background-color: ${({ activeBgColor, active }) =>
    active ? activeBgColor : 'transparent'};
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  font-size: 12px;
  color: ${({ active }) =>
    active ? '#fff' : ' #210F04'};
    cursor: pointer;
`;
