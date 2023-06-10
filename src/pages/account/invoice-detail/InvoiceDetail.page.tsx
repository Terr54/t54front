import React from 'react';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import AccountHeading from '../../../components/account-heading/AccountHeading.component';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import BackButton from '../../../components/commons/back-button/BackButton.component';
import Button from '../../../components/commons/controls/button/Button.component';
import MiniDetail from '../../../components/mini-detail/MiniDetail.component';
import classes from '../accountDetail.module.css';
import ItemTable from '../../../components/item-table/ItemTable.component';
import SubMiniDetail from '../../../components/mini-detail/SubMiniDetail';

const InvoiceDetail = () => {
  const product = [
    {
      quantity: '200',
      description: 'Dried Nigerian Ginger',
      unitPrice: '50',
      total: '10, 000'
    }
  ];
  const shipping = [
    {
      quantity: '200',
      description: 'Dried Nigerian Ginger',
      unitPrice: '50',
      total: '10, 000'
    }
  ];
  const tableHeading = ['Quantity', 'Description', 'Unit Price ($)', 'Total ($)']
  return (
    <Wrapper renderPath={() => <BackButton text="Go Back" />}>
      <AccountHeading status="Open" heading="Purchase RF/Gin101-12/12" />
      <div className={classes.button}>
        <Button text="Accept Quote" bgColor="#E63F07" />
      </div>
      <div className={classes.hairline} />
      <div className={classes.heading}>
        <div className={classes.location}>
          <h3 style={{ margin: '0 0 10px' }}>Royalty Farms</h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <PlaceOutlinedIcon fontSize='small' style={{ color: '#E63F07', marginRight: '6px' }} />
            <span>Nigeria</span>
          </div>
        </div>
        <div className={classes.miniDetails}>
          <SubMiniDetail label='Quote Number:' value='RF/Gin101-12/12' />
          <SubMiniDetail label='Quote Date:' value='12/10/2022' />
          <SubMiniDetail label='Valid Till:' value='12/10/2022' />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <MiniDetail
          name = 'Royalty Farms'
          city = '12 Lower Iweka street, Kano,'
          country = 'Nigeria.'
          heading='Vendor:'
        />
      <MiniDetail
          name = 'Royalty Farms'
          city = '12 Lower Iweka street, Kano,'
          country = 'Nigeria.'
          heading='Bill From:'
        />
        <MiniDetail
          name = 'Royalty Farms'
          city = '12 Lower Iweka street, Kano,'
          country = 'Nigeria.'
          heading='Bill To:'
        />
      </div>
      <ItemTable data={product} tableHeading={tableHeading} heading='Product' />
      <ItemTable data={shipping} tableHeading={tableHeading} heading='Shipping' />
    </Wrapper>
  );
};

export default InvoiceDetail;
