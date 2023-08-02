import React from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ModalWrapper from '../modal-wrapper/ModalWrapper.component';
import { Heading, Label } from './RequestSuccess.styles';
import Button from '../commons/controls/button/Button.component';
import { useNavigate } from 'react-router-dom';
import { path } from '../../routes/paths';

interface successProps {
  success?: boolean;
  onClick?: () => void;
}

const RequestSuccess = ({ success, onClick }: successProps) => {
  const navigate = useNavigate();
  return (
    <ModalWrapper
      onClick={onClick}
      showModal={success}
      showHeader={false}
      showClose={false}
      height='auto'
      width='auto'
    >
      <CheckCircleOutlineIcon color='success' style={{ fontSize: '50px' }} />
      <Heading>Request Submitted</Heading>
      <Label>Our team will contact you in a few hours</Label>
      <Button
        text='Continue Browsing Markets'
        bgColor='#E63F07'
        onClick={() => navigate(path.MARKET)}
        margin='22px 0px 10px'
      />
      <Button
        text='Manage Quotes'
        bgColor='transparent'
        border='none'
        color='#E63F07'
      />
    </ModalWrapper>
  );
};

export default RequestSuccess;
