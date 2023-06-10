import React from 'react';
import classes from './OrderSummary.module.css';

interface IProps {
  total?: string;
  amount?: string;
  deliveryType?: string;
}

const OrderSummary = ({ total = '65.00', amount = '1', deliveryType = 'FREE' }: IProps) => {
  return (
    <div className={classes.container}>
      <p style={{ textAlign: 'center' }}>
        By placing your order, you agree to the <span style={{ color: 'blue', cursor: 'pointer' }}>Deliver Terms</span>
      </p>
      <h3>ORDER SUMMARY</h3>
      <div className={classes.summary}>
        <span>{amount} PRODUCT</span>
        <hr style={{ opacity: 0.7, width: '100%' }} />
        <div className={classes.detail}>
            <span>Product Total</span>
            <span>$ {total}</span>
        </div>
        <hr style={{ opacity: 0.7, width: '100%' }} />
        <div className={classes.detail}>
            <span>Delivery</span>
            <span>FREE</span>
        </div>
        <hr style={{ opacity: 0.7, width: '100%' }} />
        <div className={classes.detail}>
            <h3>Total</h3>
            <h3>$ {total}</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
