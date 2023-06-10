import React from 'react'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import classes from './UnfoldBtn.module.css'

interface unfoldProps {
  text?: string
}

const UnfoldBtn = ({ text }: unfoldProps) => {
  return (
    <div className={classes.container}>
        {text}
        <UnfoldMoreIcon style={{ marginLeft: '4px', fontSize: '12px' }} />
    </div>
  )
}

export default UnfoldBtn
