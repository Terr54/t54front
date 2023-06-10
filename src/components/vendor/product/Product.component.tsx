import React from 'react';
import image from '../../../assets/pictures/product-item.jpg'
import classes from './Product.module.css'

interface productProps {
  title?: string;
  cover?: string
  onClick?: () => void
}

const Product = ({ cover, title, onClick }: productProps) => {
  return (
    <div
      className={classes.container}
      onClick={onClick}
    >
        <img src={cover ?? image} alt='product cover' style={{ width: '90%', height: '90%', borderRadius: '6px', marginBottom: '5px', objectFit: 'cover', objectPosition: 'center' }} />
      {title}
    </div>
  );
};

export default Product;
