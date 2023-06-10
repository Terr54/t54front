import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import classes from './BackButton.module.css'
import { useNavigate } from 'react-router-dom';

interface backButtonProps {
  text?: string;
  color?: string;
  fontSize?: string;
  onClick?: () => void
}

const BackButton = ({ text, color, fontSize }: backButtonProps) => {
  const navigate = useNavigate()
  return (
    <div className={classes.container} style={{ color, fontSize }} onClick={() => navigate(-1)}><ArrowBackIcon fontSize='small' /> <span className={classes.spanText}>{text}</span></div>
  )
}

export default BackButton;
