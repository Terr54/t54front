import React from 'react'
import classes from './ActionButton.module.css'

interface IProps {
    bgColor: string;
    text: string;
    renderIcon: () => React.ReactNode
}

const ActionButton = ({ bgColor, text, renderIcon}: IProps) => {
  return (
    <div className={classes.container}>
        <div className={classes.iconContainer} style={{ backgroundColor: bgColor }}>
            {renderIcon?.()}
        </div>
        <p className={classes.text}>{text}</p>
    </div>
  )
}

export default ActionButton