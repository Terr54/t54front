import { ReactNode } from 'react';

export interface ButtonPropTypes {
  className?: string;
  bgColor?: string;
  color?: string;
  padding?: string | number;
  margin?: string | number;
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  style?: object;
  border?: string | number;
  fontSize?: string | number;
  children?: ReactNode | ReactNode[];
  onClick?: (e?: any) => void;
  renderIcon?: () => ReactNode;
  text?: string;
  iconAfter?: boolean;
  loading?: boolean;
  textMargin?: string;
  disabled?: boolean;
  boxShadow?: string
}

export interface radioButtonProps {
  options?: Array<{ id: number; title: string; }>;
  active?: boolean;
  activeBgColor?: string;
  activeTab?: string,
  onClick?: () => void;
  children?: ReactNode | ReactNode[]
}
