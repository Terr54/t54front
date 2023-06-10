import React from 'react';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import classes from './RecentlyAdded.module.css';
import { useTranslation } from 'react-i18next';

interface recentlyAddedProps {
  onClick?: () => void;
}

const RecentlyAdded = ({ onClick }: recentlyAddedProps) => {
  const { t } = useTranslation()
  return (
    <div className={classes.types} onClick={onClick}>
      {t('sort-by')}:{' '}
      <span className={classes.recentText}>
      {t('recently-added')}{' '}
        <ExpandMoreOutlinedIcon
          fontSize='small'
          style={{ marginLeft: '6px' }}
        />
      </span>
    </div>
  );
};

export default RecentlyAdded;
