import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { supplierCardProps } from './supplierCardProps';
import classes from './SupplierCard.module.css';
import flag from '../../../assets/pictures/IvoryFlag.svg';

const SupplierCard = ({
  logo,
  title,
  email,
  nationality,
  activity = 'SUPPLIER',
  date = '2005',
  accepted = false,
  id = '122434',
  formattedAddress,
  country
}: supplierCardProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div style={{ display: 'flex' }}>
        <div className={classes.logo}>{logo
          ? (
            <img
              style={{
                width: 50,
                height: 50,
                borderRadius: '50%'
              }}
              src={logo}
            />
            )
          : ''}</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {
            title
              ? (
              <h3 style={{ margin: '0', width: '80%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '6px', color: '#210F04' }}>
                {title}
              </h3>
                )
              : null
          }
          <h5 style={{ margin: '0', width: '80%', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', marginBottom: '6px', color: '#210F04' }}>
            {email}
          </h5>
          <span style={{ fontSize: '13px' }}><span style={{ color: 'rgba(102, 102, 102, 1)' }}>ID: </span> {id}</span>
          {
            country
              ? (
              <span style={{ fontSize: '13px' }}>
                <span style={{ color: 'rgba(102, 102, 102, 1)' }}>Country: </span>
                {country}
              </span>
                )
              : null
          }
          {
            formattedAddress
              ? (
              <span style={{ fontSize: '13px' }}>
                <span style={{ color: 'rgba(102, 102, 102, 1)' }}>Address: </span>
                {formattedAddress}
              </span>
                )
              : null
          }
        </div>
        </div>
        <MoreVertOutlinedIcon fontSize='small' />
      </div>
      <div className={classes.bottom}>
      <span className={`${classes.verified}`}>
            {date}
      </span>
      {
        accepted
          ? (
          <span className={`${classes.verified}`}>
              Accepted
        </span>
            )
          : (
          <span className={`${classes.verified} ${classes.unverified}`}>
              Pending
        </span>
            )
      }
      </div>
    </div>
  );
};

export default SupplierCard;
