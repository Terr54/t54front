import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../../store';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '../../../components/commons/controls/button/Button.component';
import classes from './Dashboard.module.css';
import InfoBlock from '../info-block/InfoBlock.component';
import DashboardCard from '../../../components/vendor/statistic-card/DashboardCard.component';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
// import PaidIcon from '@mui/icons-material/Paid';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Dashboard = () => {
  const userDetails = useSelector(state => state.user);
  const { t } = useTranslation();

  return (
    <div>
      <div>
        <>
          {t('welcomeUser')} {userDetails.payload?.profile.username}
        </>
      </div>
      <div className={classes.head}>
        {/* <span>Here’s what is happening with your store recently.</span> */}
        <Button
          text={`${t('last')} 30 ${t('days')}`}
          iconAfter
          renderIcon={() => <KeyboardArrowDownIcon fontSize='small' />}
          color='#000'
          boxShadow='none'
          bgColor='transparent'
          border='1px solid #D1D1D1'
          padding='2px 7px'
          fontSize='12px'
          margin='16px 0px 0'
        />
      </div>
      <InfoBlock style={{ marginTop: '20px' }}>
        <div className={classes.dashboardItems}>
          <DashboardCard text='Total Orders' difference='10' amount='32' renderIcon={() => <ReceiptLongIcon fontSize='small' style={{ color: '#E63F07' }} />} />
          <DashboardCard text='Total Orders' difference='10' amount='36' renderIcon={() => <ReceiptLongIcon fontSize='small' style={{ color: '#E63F07' }} />} />
          <DashboardCard text='Total Orders' difference='10' amount='32' renderIcon={() => <ReceiptLongIcon fontSize='small' style={{ color: '#E63F07' }} />} />
          <DashboardCard text='Total Orders' difference='10' amount='30' renderIcon={() => <ReceiptLongIcon fontSize='small' style={{ color: '#E63F07' }} />} />
        </div>
      </InfoBlock>
    </div>
  );
};

export default Dashboard;
