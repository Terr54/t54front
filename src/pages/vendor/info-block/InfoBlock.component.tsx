import React from 'react';
import classes from './InfoBlock.module.css';

interface infoBlockProps {
  heading?: string;
  children?: React.ReactNode[] | React.ReactNode;
  bgColor?: string;
  flexDirection?: string;
  width?: string;
  height?: string;
  renderIcon?: () => React.ReactNode;
  style?: object
}

const InfoBlock = ({
  heading = '',
  children,
  bgColor = '#fff',
  width,
  height,
  renderIcon,
  style
}: infoBlockProps) => {
  return (
    <div
      className={classes.container}
      style={{ backgroundColor: bgColor, width, height, ...style }}
    >
      <div className={classes.header}>
        {heading && <span className={classes.heading}>{heading}</span>}
        {renderIcon?.()}
      </div>
      <div style={{ marginTop: '10px' }}>{children}</div>
    </div>
  );
};

export default InfoBlock;
