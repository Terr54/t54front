import React, { useRef, useEffect, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PathHeader from '../../components/path-header/PathHeader.component';
import Button from '../../components/commons/controls/button/Button.component';
import classes from './CheckoutSummary.module.css';
import CartItem from '../../components/cart-item/CartItem.component';
import cover from '../../assets/pictures/spices2.png';
import flag from '../../assets/pictures/NigerianFlag.svg';
import { StyledClose } from '../../components/modal-wrapper/ModalWrapper.styles';
import OrderSummary from '../../components/order-summary/OrderSummary.component';
import { paymentCards } from '../../assets/data/paymentCards';
import { PagedProductListResponse } from '../../domain/domain';
import {
  getAllAvailbleProducts,
  getAllProductCategories,
} from '../../api/common';
import ProductItem from '../../components/product-item/ProductItem.component';
import countries, { CountryCode } from '../../utils/contrycodes';
import { useNavigate } from 'react-router-dom';

const CheckoutSummary = () => {
  const effectRef = useRef(true);
  const navigate = useNavigate();
  const [productPage, setProductPage] = useState(0);
  const [producPagSize, setProductPageSize] = useState(20);
  const [productDict, setProductDict] = useState<PagedProductListResponse>();

  useEffect(() => {
    if (effectRef.current) {
      getAllProductCategories().then((data) => {
        console.log({ data });
      });
      getAllAvailbleProducts(productPage, producPagSize).then((res) => {
        console.log({ res });
        setProductDict(res.data.content);
      });
    }
    effectRef.current = false;
  }, []);
  return (
    <div className={classes.container}>
      <PathHeader path='Home / Terre Basics / Fresh Banana' />
      <div className={classes.content}>
        <div className={classes.leftSection}>
          <h3 style={{ marginLeft: '0', marginRight: '0' }}>
            items are reserved for 60 mins
          </h3>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            In stock
          </div>
          <div className={classes.preview}>
            <div className={classes.heading}>
              <h3>Basket</h3>
              <StyledClose />
            </div>
            <CartItem
              cover={cover}
              heading='Dried Nigerian Ginger'
              country='Nigeria'
              countryFlag={flag}
              processing='Dried'
              type='Terre Basics'
            />
            <div className={classes.actions}>
              <span className={classes.action}>Delete</span>
              <span className={classes.action}>Move to Wishlist</span>
            </div>
            <Button
              text='checkout'
              bgColor='#E63F07'
              renderIcon={() => <ArrowForwardIcon />}
              iconAfter
              width='100%'
              style={{ marginTop: '6rem' }}
            />
          </div>
          <div className={classes.continueText}>
            <h3 style={{ textDecoration: 'underline' }}>Continue Shopping</h3>
          </div>
        </div>
        <div className={classes.rightSection}>
          <Button
            text='checkout'
            bgColor='#E63F07'
            renderIcon={() => <ArrowForwardIcon />}
            iconAfter
            width='100%'
            style={{ margin: '15px 0 10px' }}
          />
          <OrderSummary />
          <div className={classes.promoCode}>
            <div className={classes.promoContent}>
              <div className={classes.promoHeader}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h3 style={{ margin: '0', marginRight: '4px' }}>
                    Promo Code
                  </h3>
                  <HelpOutlineIcon />
                </div>
                <ExpandMoreIcon />
              </div>
            </div>
          </div>
          <div className={classes.helps}>
            <h3 style={{ margin: '30px 0 4px' }}>NEED HELP ?</h3>
            <p>Shipping</p>
            <p>Returns & Exchanges</p>
            <p>Contact US</p>
          </div>
          <Button
            text='LIVE CHAT'
            bgColor='#E63F07'
            width='100%'
            style={{ margin: '30px 0 30px' }}
          />
          <div className={classes.paymentDetails}>
            <h3>ACCEPTED PAYMENT METHODS</h3>
            <div className={classes.paymentCards}>
              {paymentCards?.map((item: any) => (
                <img key={item.id} src={item.src} className={classes.card} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.relatedProducts}>
        <h3>Related Products</h3>
        <div className={classes.products}>
          {productDict?.products.map((product) => (
            <ProductItem
              key={product.id}
              bgImage={productDict.mediaSlots?.[product.id]?.[0].src}
              title={product.name}
              country={
                countries[product.originCountryId as CountryCode].name.en
              }
              price={{
                currency:
                  productDict.productStocks?.[product.id]?.[0]?.currency,
                amount: productDict.productStocks?.[product.id]?.[0]?.unitPrice,
                unit: productDict.productStocks?.[product.id]?.[0]?.unitMeasure,
              }}
              style={{ marginRight: '5px' }}
              onClick={() => navigate(`/product-detail/${product.id}`)}
              countryFlag={
                countries[product.originCountryId as CountryCode].flag?.flag
              }
              company={
                productDict.productSuppliers?.[product.sellerProfileId]
                  ?.merchantName
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
