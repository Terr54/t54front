import { ReactNode } from 'react'

export interface contactDetailProps {
  title?: string;
  value?: string[];
  renderIcon?: () => ReactNode;
  style?: object;
}
