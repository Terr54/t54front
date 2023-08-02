import React from 'react';
import classes from './DashboardCard.module.css';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

interface statisticsCardProps {
  renderIcon?: () => React.ReactNode;
  text?: string;
  difference?: string;
  amount?: string;
  trending?: boolean;
}

const DashboardCard = ({
  text,
  renderIcon,
  difference,
  trending,
  amount,
  ...props
}: statisticsCardProps) => {
  return (
    <div className={classes.container} {...props}>
      <div style={{ display: 'flex' }}>
        <span className={classes.text}>{text}</span>
        {renderIcon?.()}
      </div>
      <h2 style={{ margin: '0 0 15px' }}>{amount}</h2>
      <div className={classes.trending}>
        {trending
          ? (
          <TrendingUpIcon style={{ color: '#00893A', fontSize: '14px' }} />
            )
          : (
          <TrendingDownIcon style={{ color: '#F52F2F', fontSize: '14px' }} />
            )}
          <span>
          <span className={classes.difference} style={{ color: trending ? '#00893A' : '#F52F2F' }}>{trending ? `+${difference}` : `-${difference}`}</span>
          <span style={{ color: '#666666' }}> /month</span>
          </span>
      </div>
    </div>
  );
};

export default DashboardCard;
