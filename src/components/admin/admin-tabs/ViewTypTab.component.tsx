import React from 'react';
import classes from './AdminTab.module.css';
import { adminTabProps } from './adminTabProps';

const ViewTypeTab = ({ active = true, renderIcon, onClick }: adminTabProps) => {
  return (
    <div
      className={active ? `${classes.type} ${classes.activeType}` : classes.type}
      onClick={onClick}
    >
      {renderIcon?.()}
    </div>
  );
};

export default ViewTypeTab;
