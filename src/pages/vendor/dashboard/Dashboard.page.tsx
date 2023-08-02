import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from '../../../store';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VerifiedIcon from '@mui/icons-material/Verified';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import PaidIcon from '@mui/icons-material/Paid';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Button from '../../../components/commons/controls/button/Button.component';
import classes from './Dashboard.module.css';
import InfoBlock from '../info-block/InfoBlock.component';
import DashboardCard from '../../../components/vendor/statistic-card/DashboardCard.component';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ActionButton from '../../../components/commons/controls/action-button/ActionButton.component';
import PieChart from '../../../components/pie-chart/PieChart.component';
// import PaidIcon from '@mui/icons-material/Paid';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import WatchLaterIcon from '@mui/icons-material/WatchLater';

const Dashboard = () => {
  const userDetails = useSelector((state) => state.user);
  const productList = useSelector(state => state.products.payload);
  const { t } = useTranslation();

  console.log('productList', productList)

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
          <DashboardCard
            text='Total Orders'
            difference='10'
            amount='32'
            renderIcon={() => (
              <ReceiptLongIcon fontSize='small' style={{ color: '#E63F07' }} />
            )}
          />
          <DashboardCard
            text='Total Orders'
            difference='2.55'
            trending
            amount='36,000,000'
            renderIcon={() => (
              <PaidIcon fontSize='small' style={{ color: '#1071FF' }} />
            )}
          />
          <DashboardCard
            text='Total Orders'
            difference='10'
            amount='32'
            renderIcon={() => (
              <VerifiedIcon fontSize='small' style={{ color: '#00893A' }} />
            )}
          />
          <DashboardCard
            text='Total Orders'
            difference='10'
            amount='30'
            renderIcon={() => (
              <WatchLaterIcon fontSize='small' style={{ color: '#F5C92F' }} />
            )}
          />
        </div>
      </InfoBlock>
      <div className={classes.middleBlocks}>
        <InfoBlock
          width='40%'
          renderIcon={() => <OpenInNewIcon color='disabled' fontSize='small' />}
          heading='Wallet Balance'
        >
          <h2 style={{ margin: '4px 0 0' }}>$16M</h2>
          <div className={classes.actionButtons}>
            <ActionButton
              text='Copy'
              renderIcon={() => (
                <ContentCopyIcon
                  style={{ color: '#1071FF', fontSize: '16px' }}
                />
              )}
              bgColor='#ECF4FF'
            />
            <ActionButton
              text='Withdraw'
              renderIcon={() => (
                <PaidOutlinedIcon
                  style={{ color: '#86B817', fontSize: '16px' }}
                />
              )}
              bgColor='#F6F9ED'
            />
            <ActionButton
              text='Transfer'
              renderIcon={() => (
                <PaidOutlinedIcon
                  style={{ color: '#E63F07', fontSize: '16px' }}
                />
              )}
              bgColor='#FDF0EC'
            />
          </div>
        </InfoBlock>
        <InfoBlock
          renderIcon={() => (
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
            />
          )}
          heading='Best Selling Products'
          width='60%'
        >
          <div style={{ width: '100%' }}>
            <PieChart />
          </div>
        </InfoBlock>
      </div>
    </div>
  );
};

export default Dashboard;
