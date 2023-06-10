export interface sidebarItemProps {
  text?: string,
  renderIcon?: () => React.ReactNode;
  onClick?: () => void;
  active?: boolean;
  style?: object
}
