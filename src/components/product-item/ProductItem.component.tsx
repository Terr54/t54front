import React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { ProductCard, ProductImg, productItemProps, Price, ProductTitle, ProductCompany, ProductOrigin, ProductCurrency, ProductPrice } from './productItem.styles';

const ProductItem = ({
  title,
  company,
  country,
  price,
  bgImage,
  width = '18vw',
  height,
  coverHeight = '30vh',
  // coverWidth = '14vw',
  onClick,
  style,
  countryFlag
}: productItemProps) => {
  return (
        <ProductCard width={width} height={height} style={style} onClick={onClick}>
            <ProductImg coverHeight={coverHeight} bgImage={bgImage}>
                <BookmarkBorderIcon style={{ color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px', borderRadius: '50%' }} />
            </ProductImg>
            <ProductTitle>{title}</ProductTitle>
            {
              company && (<ProductCompany>{company}</ProductCompany>)
            }
            <ProductOrigin>Origin: {countryFlag} {country}</ProductOrigin>
            <Price>
                <ProductCurrency>{price?.currency}</ProductCurrency>
                <ProductPrice>{price?.amount}</ProductPrice>
                <ProductCurrency>/{price?.unit}</ProductCurrency>
            </Price>
        </ProductCard>
  );
};
export default ProductItem;
