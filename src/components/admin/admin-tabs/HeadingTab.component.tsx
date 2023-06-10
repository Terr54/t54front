import React from 'react';
import classes from './AdminTab.module.css';
import { adminTabProps } from './adminTabProps';

const HeadingTab = ({ active = true, text, amount, onClick }: adminTabProps) => {
  return (
    <div
      className={active ? `${classes.tab} ${classes.activeTab}` : classes.tab}
      onClick={onClick}
    >
      {`${text} (${(amount)})`}
    </div>
  );
};

export default HeadingTab;
