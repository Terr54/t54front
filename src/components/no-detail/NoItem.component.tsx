import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { path } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';
import NoDetail from './NoDetail.component';

const NoItem = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <NoDetail {...props} />
  );
};

export default NoItem;
