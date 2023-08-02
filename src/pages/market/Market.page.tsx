import React, { useState, useEffect, useRef } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { marketplaceItems } from '../../assets/data/marketplaceItems';
import Alert from '../../components/alert/Alert.component';
import Carousel, {
  CarouselItem
} from '../../components/Carousel/Carousel.component';
import MarketplaceItem from '../../components/marketplace-item/MarketplaceItem.component';
import MarketplaceNav from '../../components/marketplace-nav/MarketplaceNav.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { Container } from './Market.styles';
import { useTranslation } from 'react-i18next';
import ProductItem from '../../components/product-item/ProductItem.component';
import { ServicesContainer } from '../landing/Landing.styles';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import Button from '../../components/commons/controls/button/Button.component';
import SupplierCard from '../../components/supplier-card/SupplierCard.component';
import supplierLogo from '../../assets/pictures/supplier-logo.png';
import { useNavigate } from 'react-router-dom';
// import countries, { CountryCode } from '../../../utils/contrycodes';
import { products } from '../../assets/data/products';
import BackToTop from '../../components/commons/back-to-top/BackToTop.component';
import { PagedProductListResponse } from '../../domain/domain';
import { getAllAvailbleProducts, getAllProductCategories } from '../../api/common';
import countries, { CountryCode } from '../../utils/contrycodes';
import { loadSuppliersAction } from '../../store/features/slices/supplier';
import { useDispatch, useSelector } from '../../store';
import { path } from '../../routes/paths';
import NoDetail from '../../components/no-detail/NoDetail.component';
import NoItem from '../../components/no-detail/NoItem.component';

const MarketPage = () => {
  const suppliersState = useSelector((state) => state.supplier.payload);

  const [closeAlert, setCloseAlert] = useState(true);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [productPage, setProductPage] = useState(0);
  const [producPagSize, setProductPageSize] = useState(20);
  const [productDict, setProductDict] = useState<PagedProductListResponse>();
  const [page, setPage] = useState(0);

  const effectRef = useRef(true);
  const dispatch = useDispatch()

  useEffect(() => {
    if (effectRef.current) {
      getAllProductCategories().then(data => {
        console.log({ data });
      });
      getAllAvailbleProducts(productPage, producPagSize).then(res => {
        console.log({ res });
        setProductDict(res.data.content);
      });
    }
    effectRef.current = false;
  }, []);

  useEffect(() => {
    if (!effectRef?.current) {
      dispatch(loadSuppliersAction({ pageNumber: page, pageSize: 100 }));
      effectRef.current = true;
    } else {
      effectRef.current = false;
    }
  }, [dispatch, page]);

  return (
    <Container>
      <MarketplaceNav margin='0' />
      <SectionWrapper height="70vh" bgColor="#F6F9ED">
        <Carousel>
          {marketplaceItems.map((item) => (
            <CarouselItem
              width={'100%'}
              key={`${item.heading}` + `${Math.random()}`}
            >
              <MarketplaceItem
                heading={item.heading}
                caption={item.caption}
                itemImage={item.itemImage}
                width="90%"
              />
            </CarouselItem>
          ))}
        </Carousel>
      </SectionWrapper>
      {closeAlert && (
        <Alert
          text="Complete your account set up to have full access to the marketplace"
          onClose={() => setCloseAlert(false)}
          renderIconLeft={() => <ErrorOutlineIcon />}
          renderIconRight={() => <CloseIcon />}
        />
      )}
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading="New Products"
          showCaption={false}
          flexDirection="row"
          textAlign="left"
          color="#000"
          captionLength="50%"
          headingSize="16px"
          headingLength="100%"
          showHeadingRightContent={() => (
            <Button
              bgColor="transparent"
              color="#E63F07"
              text="Discover More"
              onClick={() => navigate('/all-products')}
              width=""
              boxShadow="none"
            />
          )}
          headingJustify="space-between"
          headingAlign="center"
          headingFlex="row"
          headingDisplay="flex"
        />
        <ServicesContainer
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              // alignContent: 'flex-start',
              justifyContent: 'center'
            }}
        >
          {
            productDict?.products
              ? (
                  productDict?.products.map((product) => (
                <ProductItem
                  key={product.id}
                  bgImage={productDict.mediaSlots?.[product.id]?.[0].src}
                  title={product.name}
                  country={countries[product.originCountryId as CountryCode].name.en}
                  price={{
                    currency: productDict.productStocks?.[product.id]?.[0]?.currency,
                    amount: productDict.productStocks?.[product.id]?.[0]?.unitPrice,
                    unit: productDict.productStocks?.[product.id]?.[0]?.unitMeasure
                  }}
                  style={{ margin: '0 15px' }}
                  onClick={() => navigate(`/product-detail/${product.id}`)}
                  countryFlag={countries[product.originCountryId as CountryCode].flag?.flag}
                  company={productDict.productSuppliers?.[product.sellerProfileId]?.merchantName}
                />
                  )
                  )
                )
              : <NoItem />
          }
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading={t('terre-basics')}
          showCaption={false}
          flexDirection="row"
          textAlign="left"
          color="#000"
          captionLength="50%"
          headingSize="16px"
          headingLength="100%"
          showHeadingRightContent={() => (
            <Button
              bgColor="transparent"
              color="#E63F07"
              text="See All"
              onClick={() => navigate('/all-products')}
              boxShadow="none"
            />
          )}
          headingJustify="space-between"
          headingAlign="center"
          headingFlex="row"
          headingDisplay="flex"
        />
        <ServicesContainer
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}
        >
          {
            productDict?.products
              ? (
                  productDict?.products.map((product) => (
                <ProductItem
                  key={product.id}
                  bgImage={productDict.mediaSlots?.[product.id]?.[0].src}
                  title={product.name}
                  country={countries[product.originCountryId as CountryCode].name.en}
                  price={{
                    currency: productDict.productStocks?.[product.id]?.[0]?.currency,
                    amount: productDict.productStocks?.[product.id]?.[0]?.unitPrice,
                    unit: productDict.productStocks?.[product.id]?.[0]?.unitMeasure
                  }}
                  style={{ margin: '0 15px' }}
                  onClick={() => navigate(`/product-detail/${product.id}`)}
                  countryFlag={countries[product.originCountryId as CountryCode].flag?.flag}
                  company={productDict.productSuppliers?.[product.sellerProfileId]?.merchantName}
                />
                  )
                  )
                )
              : <NoItem />
          }
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100}>
        <HeaderCaption
          heading={t('browse-suppliers')}
          showCaption={false}
          flexDirection="row"
          textAlign="left"
          color="#000"
          captionLength="50%"
          headingSize="16px"
          headingLength="100%"
          showHeadingRightContent={() => (
            <Button
              bgColor="transparent"
              color="#E63F07"
              text={t('see-all-suppliers')}
              onClick={() => navigate(path.SUPPLIERS)}
            />
          )}
          headingJustify="space-between"
          headingAlign="center"
          headingFlex="row"
          headingDisplay="flex"
        />
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            overflowX: 'scroll'
          }}
        >
          { suppliersState
            ? suppliersState?.accepted?.content?.map((sup) => (
              <SupplierCard
                key={sup.supplierProfile?.id}
                title={sup?.supplierProfile?.merchantName}
                supplierLogo={sup.profile?.picture}
              />
            ))
            : <NoItem infoText='Opps, no suppliers found 😥😓' />
          }
        </div>
      </SectionWrapper>
      <SectionWrapper height={100}>
        <HeaderCaption
          heading={t('bestsellers')}
          showCaption={false}
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="50%"
          headingSize="16px"
          headingLength="100%"
          showHeadingRightContent={() => (
            <Button
              bgColor="transparent"
              color="#E63F07"
              text="See All Suppliers"
            />
          )}
          headingJustify="space-between"
          headingAlign="center"
          headingFlex="row"
          headingDisplay="flex"
        />
        <ServicesContainer
          style={{
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {/* {
            products.filter((item, index) => index < 10).map((product) => (
              <ProductItem
                key={product.title}
                bgImage={product.bgImage}
                title={product.title}
                company={product.company}
                country={product.country}
                price={product.price}
                style={{ marginRight: '5px' }}
              />
            ))
          } */}
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100}>
        <HeaderCaption
          heading={t('in-season-products')}
          showCaption={false}
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="50%"
          headingSize="16px"
          headingLength="100%"
          showHeadingRightContent={() => (
            <Button bgColor="transparent" color="#E63F07" text="See More" />
          )}
          headingJustify="space-between"
          headingAlign="center"
          headingFlex="row"
          headingDisplay="flex"
        />
        <ServicesContainer
          style={{
            flexDirection: 'row',
            display: 'flex',
            flexWrap: 'wrap'
          }}
        >
          {/* {
            products.filter((item, index) => index < 10).map((product) => (
              <ProductItem
                key={product.title}
                bgImage={product.bgImage}
                title={product.title}
                company={product.company}
                country={product.country}
                price={product.price}
                style={{ marginRight: '5px' }}
              />
            ))
          } */}
        </ServicesContainer>
      </SectionWrapper>
      <BackToTop />
    </Container>
  );
};
export default MarketPage;
