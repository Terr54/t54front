import React from 'react';
import classes from './MiniDetail.module.css';

interface miniDetailProps {
  name?: string;
  country?: string;
  city?: string;
  heading?: string;
}

const MiniDetail = ({ heading, name, city, country }: miniDetailProps) => {
  return (
    <div className={classes.container}>
      <p style={{ color: '#666666' }}>{heading}</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span>{name}</span>
        <span>{city}</span>
        <span>{country}</span>
      </div>
    </div>
  );
};

export default MiniDetail;
