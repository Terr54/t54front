import React, { useEffect, useState } from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import { productDetailSteps } from '../../assets/data/productDetailSteps';
import Alert from '../../components/alert/Alert.component';
// import Navbar from '../../components/commons/navbar/Navbar.component';
import PathHeader from '../../components/path-header/PathHeader.component';
import ProductDetailStep from '../../components/product-detail-step/ProductDetailStep.component';
import ProductPreview from '../../components/product-preview/ProductPreview.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import SelectDoc from '../../components/commons/select-doc/SelectDoc.component';
import { documents } from '../../assets/data/documents';
import Button from '../../components/commons/controls/button/Button.component';
import ProductItem from '../../components/product-item/ProductItem.component';
import { products } from '../../assets/data/products';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Container,
  Steps,
  Main,
  Content,
  Documents,
  Accordions,
  Specs,
  Spec,
  Companies,
  Image,
  Company,
  CompanyTitle,
  HR,
  Label,
  CompanyCost,
  ReviewHeading,
  RateHeading,
  StyledLabel,
  Reviews
} from './ProductDetail.styles';
import { accordions } from '../../assets/data/accordions';
import Accordion from '../../components/commons/accordion/Accordion.component';
import BackToTop from '../../components/commons/back-to-top/BackToTop.component';
import { detailSpecifications } from '../../assets/data/detail-specificaions';
import { shippingDetails } from '../../assets/data/shippingDetails';
import Rating from '../../components/rating/Rating.component';
import ReviewCard from '../../components/review-card/ReviewCard.component';
import NoDetail from '../../components/no-detail/NoDetail.component';
import { ProductResponse } from '../../domain/domain';
import { findProductById } from '../../api/common';
import { useTranslation } from 'react-i18next';

const ProductDetail = () => {
  const navigate = useNavigate();

  const [closeAlert, setCloseAlert] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [checkedIndex, setCheckedIndex] = useState<number>();
  const [openAcc, setOpenAcc] = useState<number | string>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [productPayload, setProductPayload] = useState<ProductResponse>();
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    // fetch product
    if (id) {
      findProductById(id).then((res) => {
        setProductPayload(res.data?.content);
        window?.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
  }, [id]);

  const handleActive = (id: number) => {
    setActiveIndex(id);
  };
  const handleOpenAcc = (id: string | number) => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
      setOpenAcc(id);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <Container>
        <PathHeader
          path={`${t(
            productPayload?.product?.category?.substring('product.'.length) ??
              ''
          )}/${productPayload?.product?.name}`}
        />
        {closeAlert && (
          <Alert
            text='Complete your account set up to have full access to the marketplace'
            onClose={() => setCloseAlert(false)}
            renderIconLeft={() => <ErrorOutlineIcon />}
            renderIconRight={() => <CloseIcon />}
          />
        )}
        {productPayload ? <ProductPreview payload={productPayload} /> : null}
        <SectionWrapper height={100}>
          <Steps>
            {productDetailSteps.map((step) => (
              <ProductDetailStep
                key={step.id}
                step={step.step}
                active={activeIndex === step.id}
                onClick={() => handleActive(Number(step.id))}
              />
            ))}
          </Steps>
          {activeIndex === 0 && (
            <Main>
              <Content contentPadding='14px 14px 60px'>
                <p>{productPayload?.productDetails?.details}</p>
                <h4>Available Specifications</h4>
                <Specs>
                  <div>
                    <Spec>
                      <p>Scientific Name:</p>
                      <span>
                        {productPayload?.productDetails?.scientificName}
                      </span>
                    </Spec>
                    <Spec>
                      <p>Product Variety:</p>
                      <span>
                        {productPayload?.productDetails?.productVariety}
                      </span>
                    </Spec>
                    <Spec>
                      <p>Crop Year:</p>
                      <span>{productPayload?.productDetails?.cropYear}</span>
                    </Spec>
                    <Spec>
                      <p>Production Mode:</p>
                      <span>
                        {productPayload?.productDetails?.productionMode}
                      </span>
                    </Spec>
                    <Spec>
                      <p>Genetics:</p>
                      <span>{productPayload?.productDetails?.genetics}</span>
                    </Spec>
                    <Spec>
                      <p>Moisture (max %):</p>
                      <span>{productPayload?.productDetails?.moisture}</span>
                    </Spec>
                  </div>
                </Specs>
              </Content>
            </Main>
          )}
          {activeIndex === 1 && (
            <Main>
              {documents
                ? (
                <Content contentPadding='14px 14px 60px'>
                  <Alert
                    text='Select the certifications you want to download and click download.'
                    padding='12px'
                    margin='0px'
                  />
                  <Documents>
                    {documents.map((doc) => (
                      <SelectDoc
                        key={doc.id}
                        text={doc.text}
                        onClick={() => setCheckedIndex(doc.id)}
                        checked={checkedIndex === doc.id}
                      />
                    ))}
                    <Button
                      text='Download'
                      bgColor='#E63F07'
                      width={9}
                      padding='8px'
                      margin='26px 0px 0px'
                    />
                  </Documents>
                </Content>
                  )
                : (
                <NoDetail
                  infoText='This product does not have any certifications atteched. You can request the certifications from the seller.'
                  text='Request Certifications'
                />
                  )}
            </Main>
          )}
          {activeIndex === 2 && (
            <Main>
              <Content contentPadding='14px 14px 60px'>
                <Alert
                  text='These prices are not always constant as they can be changed by the shipping company'
                  padding='12px'
                  margin='0px'
                  renderIconLeft={() => (
                    <ErrorOutlineIcon color='primary' fontSize='small' />
                  )}
                />
                <Companies>
                  <Label>Shipping Company</Label>
                  {shippingDetails.map((com) => (
                    <Company key={com.id}>
                      <Image>
                        {com.logo && <img src={com.logo} alt='company logo' />}
                      </Image>
                      <CompanyTitle>{com.company}</CompanyTitle>
                    </Company>
                  ))}
                </Companies>
                <HR />
                <Companies>
                  <Label>Shipping cost/KG</Label>
                  {shippingDetails.map((com) => (
                    <CompanyCost key={com.id}>
                      <h2>{com.cost} $</h2>
                    </CompanyCost>
                  ))}
                </Companies>
              </Content>
            </Main>
          )}
          {activeIndex === 3 && (
            <Main>
              <Content contentPadding='14px 14px 60px'>
                <ReviewHeading>
                  <RateHeading>
                    <StyledLabel>Overall rating: </StyledLabel>
                    <Rating rating={4} ratedNum={2} />
                  </RateHeading>
                  <Button text='Write a Review' bgColor='#E63F07' />
                </ReviewHeading>
                <Reviews>
                  <ReviewCard
                    username='Cabrel'
                    rating={3}
                    ratedNum={2}
                    date='3th January 2020 '
                    message='Delivers fresh products only. The fruits he delivered were not overriped and they tasted very good. His packaging is also top notch. I highly recommend. Delivers fresh products only. The fruits he delivered were not overriped and they tasted very good. His packaging is also top notch. I highly recommend.'
                    likes='114'
                    dislikes='10'
                  />
                  <ReviewCard
                    username='Cabrel'
                    rating={3}
                    ratedNum={2}
                    date='3th January 2020 '
                    message='Delivers fresh products only. The fruits he delivered were not overriped and they tasted very good. His packaging is also top notch. I highly recommend. Delivers fresh products only. The fruits he delivered were not overriped and they tasted very good. His packaging is also top notch. I highly recommend.'
                    likes='114'
                    dislikes='10'
                  />
                </Reviews>
              </Content>
            </Main>
          )}
          <div style={{ margin: '20px 0px' }}>
            <HeaderCaption
              heading='Related Products'
              showCaption={false}
              flexDirection='row'
              textAlign='left'
              color='#000'
              captionLength='50%'
              headingSize='12px'
              headingMargin='26px 0px 14px'
              headingLength='100%'
              showHeadingRightContent={() => (
                <Button
                  bgColor='transparent'
                  color='#E63F07'
                  text='Discover More'
                  onClick={() => navigate('/all-products')}
                />
              )}
              headingJustify='space-between'
              headingAlign='center'
              headingFlex='row'
              headingDisplay='flex'
            />
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4vw',
                marginTop: '10px'
              }}
            ></div>
          </div>
          <div style={{ margin: '15px 0px' }}>
            <HeaderCaption
              heading='Frequently Asked Questions'
              showCaption={false}
              flexDirection='row'
              textAlign='left'
              color='#000'
              captionLength='50%'
              headingSize='12px'
              headingLength='100%'
            />
            <Accordions>
              {accordions.map((acc) => (
                <Accordion
                  key={acc.id}
                  text={t(`${acc.text}`)}
                  heading={t(`${acc.heading}`)}
                  open={(openAcc === acc.id) && isOpen}
                  onClick={() => handleOpenAcc(acc.id)}
                  texts={acc.texts}
                />
              ))}
            </Accordions>
          </div>
        </SectionWrapper>
        <BackToTop />
      </Container>
    </>
  );
};

export default ProductDetail;
