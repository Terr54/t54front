import React, { ReactNode } from 'react'
import BackButton from '../../commons/back-button/BackButton.component';
import Button from '../../commons/controls/button/Button.component';
import classes from './Wrapper.module.css'

interface wrapperProps {
  renderButton?: () => ReactNode;
  children?: ReactNode | ReactNode[];
  heading?: string;
  pathName?: string;
  contentColor?: string;
  color?: string;
  renderPath?: () => ReactNode;
}

const Wrapper = ({ renderButton, children, heading, contentColor = '#fff', pathName = '', renderPath, color }: wrapperProps) => {
  return (
    <div>
      {
        pathName && <BackButton color={color ?? '#666666'} text={pathName} fontSize='12px' />
      }
      {
        renderPath && <span style={{ fontSize: '12px', color: '#666666' }}>{renderPath?.()}</span>
      }
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0px' }}>
        <h2 style={{ margin: '0px' }}>{heading}</h2>
        {renderButton?.()}
      </div>
      <div className={classes.content} style={{ backgroundColor: contentColor }}>
          {children}
      </div>
    </div>
  )
}

export default Wrapper
