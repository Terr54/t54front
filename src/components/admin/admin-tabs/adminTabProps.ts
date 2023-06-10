export interface adminTabProps {
  active?: boolean;
  amount?: string | number;
  text?: string;
  onClick?: () => void;
  renderIcon?: () => React.ReactNode;
}
