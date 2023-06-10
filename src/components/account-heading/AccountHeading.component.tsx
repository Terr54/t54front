import React from 'react';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Button from '../commons/controls/button/Button.component';
import classes from './AccountHeading.module.css';

interface AccountHeadingProps {
  onPrint?: () => void;
  onDownload?: () => void;
  onMore?: () => void;
  heading?: string;
  status?: string;
}

const AccountHeading = ({
  onPrint,
  onDownload,
  onMore,
  heading,
  status
}: AccountHeadingProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 style={{ margin: '0' }}>{heading}</h2>
        {status === 'Open' && <div className={classes.open}>{status}</div>}
        {status === 'In-Transit' && (
          <div className={`${classes.open} ${classes.inTransit}`}>{status}</div>
        )}
        {status === 'Unpaid' && (
          <div className={`${classes.unpaid} ${classes.unpaid}`}>{status}</div>
        )}
      </div>
      <div className={classes.actionButtons}>
        <Button
          padding="6px"
          border="1px solid #D1D1D1"
          boxShadow="none"
          bgColor="transparent"
          renderIcon={() => <PrintOutlinedIcon onClick={onPrint} style={{ color: '#E63F07', fontSize: '15px' }} />}
        />
        <Button
          padding="6px"
          border="1px solid #D1D1D1"
          boxShadow="none"
          bgColor="transparent"
          margin='0 10px'
          renderIcon={() => <FileDownloadOutlinedIcon onClick={onDownload} style={{ color: '#E63F07', fontSize: '15px' }} />}
        />
        <Button
          padding="6px"
          border="1px solid #D1D1D1"
          boxShadow="none"
          bgColor="transparent"
          renderIcon={() => <MoreVertOutlinedIcon onClick={onMore} style={{ color: '#E63F07', fontSize: '15px' }} />}
        />
      </div>
    </div>
  );
};

export default AccountHeading;
