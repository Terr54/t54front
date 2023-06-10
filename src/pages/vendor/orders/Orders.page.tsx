import React from 'react';
import NoItem from '../../../components/no-detail/NoItem.component';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../routes/paths';

const Orders = () => {
  const navigate = useNavigate();
  return (
    <NoItem
      height='50vh'
      infoText='Sorry!, no orders being managed at the moment, stay tuned! 😀😄'
      text='See Products'
      onClick={() => navigate(path.VENDORPRODUCTS)}
    />
  );
};

export default Orders;
