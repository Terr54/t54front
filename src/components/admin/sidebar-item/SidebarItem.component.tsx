import React from 'react';
import { sidebarItemProps } from './sidebarItemProps';
import classes from './SidebarItem.module.css'

const SidebarItem = ({ renderIcon, text, active, onClick, style }: sidebarItemProps) => {
  return (
    <div className={active ? `${classes.container} ${classes.activeContainer}` : classes.container} onClick={onClick} style={style}>
        {renderIcon?.()}
        <span className={classes.text} style={{ marginLeft: renderIcon && '14px', fontSize: '14px' }}>{text}</span>
    </div>
  )
}

export default SidebarItem;
