import { useEffect, useRef, useState } from 'react';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import Hero from '../../components/commons/hero/Hero.component';
import bandeau from '../../assets/pictures/home2.jpg';
import Button from '../../components/commons/controls/button/Button.component';
import VideoPresentation from '../../components/VideoPresentation/VideoPresentation.component';
import videoImg from '../../assets/pictures/videoImg.png';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import ServiceCard from '../../components/ServiceCard/ServiceCard.component';
import {
  Container,
  ServicesContainer,
  MerchantActions,
  Actions,
  ActionCount,
  Right,
  RButtons,
  RadioContainer,
  Option,
} from './Landing.styles';
import Carousel, {
  CarouselItem,
} from '../../components/Carousel/Carousel.component';
import Testimonial from '../../components/commons/testimonial/Testimonial.component';
import { testimonials } from '../../assets/data/testimonials';
import ProductItem from '../../components/product-item/ProductItem.component';
import BlogCard from '../../components/blog-card/BlogCard.component';
import Contact from '../../components/contact/Contact.component';
import { useTranslation } from 'react-i18next';
import { merchantActions } from '../../assets/data/merchantActions';
import { path } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';
import { products } from '../../assets/data/products';
import { blogData } from '../../assets/data/blogData';
import {
  getAllAvailbleProducts,
  getAllProductCategories,
} from '../../api/common';
import { PagedProductListResponse } from '../../domain/domain';
import countries, { CountryCode } from '../../utils/contrycodes';
import NoItem from '../../components/no-detail/NoItem.component';
// import ResponsiveDrawer from './Drawer.page.jsx';
const Landing = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const text: string = t('ecommerce-platform-text');
  const text1: string = t('warehousing-storage-text');
  const text2: string = t('enagage-source-monitoring');
  const text3: string = t('need-advice-on-products');
  let cardHeight: string = '50vh';
  let cardHeightMobile: string = '50vh';
  showMore ? (cardHeight = '650px') : (cardHeight = '55vh');
  showMore ? (cardHeightMobile = '80vh') : (cardHeightMobile = '50vh');
  const options = [
    { id: 0, title: 'Buyers' },
    { id: 1, title: 'Suppliers' },
  ];
  const [activeTab, setActiveTab] = useState<string>(t('buyers'));
  const [productPage, setProductPage] = useState(0);
  const [producPagSize, setProductPageSize] = useState(20);
  const [productDict, setProductDict] = useState<PagedProductListResponse>();

  const effectRef = useRef(true);

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
    <Container>
      <SectionWrapper padding='0px' height='80vh' Mheight='90vh'>
        <Hero bgImage={bandeau}>
          <HeaderCaption
            heading={t('secure-agro-products-header')}
            caption={t('we-provide-platform-caption')}
            headingSize='25px'
            captionMargin='16px 0'
            MtextAlign='center'
            renderIcon={() => (
              <Button
                text={t('get-started')}
                bgColor='rgba(230, 63, 7, 1)'
                width={10}
                padding='14px'
                onClick={() => navigate(path.SIGNUP)}
              />
            )}
            HtextAlign='center'
            headingLength='70%'
            captionLength='30%'
          />
        </Hero>
      </SectionWrapper>
      {/* <small>
        Photo by{' '}
        <a href='https://unsplash.com/@markusspiske?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Markus Spiske
        </a>{' '}
        on{' '}
        <a href='https://unsplash.com/s/photos/agriculture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
          Unsplash
        </a>
      </small> */}
      {/* <ResponsiveDrawer /> */}
      <VideoPresentation videoImg={videoImg}>
        <HeaderCaption
          heading={t('who-is-t54')}
          caption={t('t54-serves')}
          marginTop='100px'
          renderIcon={() => (
            <Button
              text={t('get-started')}
              bgColor='rgba(230, 63, 7, 1)'
              width={22}
              style={{
                zIndex: 1,
              }}
              onClick={() => navigate(path.SIGNUP)}
            />
          )}
          alignItems='flex-start'
          textAlign='left'
          color='#000'
          captionLength='100%'
          headingSize='16px'
        />
      </VideoPresentation>
      <SectionWrapper padding='44px 44px 20px' height={100}>
        <HeaderCaption
          heading={t('we-offer')}
          color='#000'
          headingLength='100%'
          marginTop='300px'
        />
        <ServicesContainer>
          <ServiceCard
            bgColor='rgba(253, 240, 236, 1)'
            margin='0px 8px 0px 0px'
            height={showMore ? '42vh' : '34vh'}
          >
            <HeaderCaption
              heading={t('ecommerce-platform')}
              caption={showMore ? text : `${text.substring(0, 100)}`}
              color='rgba(83, 23, 3, 1)'
              textAlign='left'
              headingSize='13px'
              headingLength='80%'
              alignItems='flex-start'
            />
            <Button
              text={showMore ? t('show-less') : t('learn-more')}
              bgColor='transparent'
              color='rgba(230, 63, 7, 1)'
              iconAfter
              padding='0px'
              onClick={() => setShowMore(!showMore)}
              renderIcon={() => <ArrowForward fontSize='small' />}
              boxShadow='none'
            />
          </ServiceCard>
          <ServiceCard
            bgColor='rgba(246, 249, 237, 1)'
            height={showMore ? '42vh' : '34vh'}
            renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor='transparent'
                color='rgba(230, 63, 7, 1)'
                iconAfter
                padding='0px'
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize='small' />}
                boxShadow='none'
              />
            )}
          >
            <HeaderCaption
              heading={t('warehousing-storage')}
              caption={showMore ? text1 : `${text1.substring(0, 100)}`}
              color='rgba(48, 66, 8, 1)'
              textAlign='left'
              headingSize='13px'
              alignItems='flex-start'
            />
          </ServiceCard>
          <ServiceCard
            bgColor='rgba(254, 251, 239, 1)'
            height={showMore ? '42vh' : '34vh'}
            renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor='transparent'
                color='rgba(230, 63, 7, 1)'
                iconAfter
                padding='0px'
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize='small' />}
                boxShadow='none'
              />
            )}
          >
            <HeaderCaption
              heading={t('source-monitoring')}
              caption={showMore ? text2 : `${text2.substring(0, 100)}`}
              color='rgba(88, 73, 17, 1)'
              textAlign='left'
              headingSize='13px'
              alignItems='flex-start'
            />
          </ServiceCard>
          <ServiceCard
            bgColor='rgba(236, 244, 255, 1)'
            height={showMore ? '42vh' : '34vh'}
            renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor='transparent'
                color='rgba(230, 63, 7, 1)'
                iconAfter
                padding='0px'
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize='small' />}
                boxShadow='none'
              />
            )}
          >
            <HeaderCaption
              heading={t('consulting-services')}
              caption={showMore ? text3 : `${text3.substring(0, 100)}`}
              color='Consulting Services'
              textAlign='left'
              headingSize='13px'
              alignItems='flex-start'
            />
          </ServiceCard>
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100} marginTop='20px' padding='20px 44px'>
        <HeaderCaption
          heading={t('platform-to-serve')}
          caption={t('get-more-access')}
          alignItems='flex-start'
          textAlign='left'
          color='#000'
          captionLength='36%'
          headingSize='16px'
          headingLength='30%'
        />
        <ServicesContainer>
          <ServiceCard bgColor=' #F9F9F9' padding='18px' width='28vw'>
            <HeaderCaption
              heading={t('farming-contract')}
              caption={t('farming-contract-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
          <ServiceCard bgColor=' #F9F9F9' padding='18px' width='28vw' height=''>
            <HeaderCaption
              heading={t('custom-packaging')}
              caption={t('custom-packaging-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
          <ServiceCard
            bgColor=' #F9F9F9'
            padding='18px'
            width='28vw'
            heightMobile='60vh'
          >
            <HeaderCaption
              heading={t('quality-assurance')}
              caption={t('quality-assurance-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
        </ServicesContainer>
        <ServicesContainer>
          <ServiceCard bgColor=' #F9F9F9' padding='18px' width='28vw'>
            <HeaderCaption
              heading={t('integrated-logistics')}
              caption={t('integrated-logistics-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
          <ServiceCard bgColor=' #F9F9F9' padding='18px' width='28vw'>
            <HeaderCaption
              heading={t('guarantees-verification')}
              caption={t('guarantees-verification-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
          <ServiceCard bgColor=' #F9F9F9' padding='18px' width='28vw'>
            <HeaderCaption
              heading={t('order-management')}
              caption={t('order-management-text')}
              textAlign='left'
              headingSize='9px'
              captionLength='100%'
              alignItems='flex-start'
              color='#000'
              numberOfLines={3}
            >
              <CheckCircle
                style={{
                  color: '#86B817',
                  fontSize: '14px',
                  marginBottom: '15px',
                }}
              />
            </HeaderCaption>
          </ServiceCard>
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100}>
        <RadioContainer>
          <RButtons>
            {options?.map((option) => (
              <Option
                key={option.id}
                onClick={() => setActiveTab(option.title)}
                active={activeTab === option.title}
              >
                {option.title}
              </Option>
            ))}
          </RButtons>
        </RadioContainer>
        <MerchantActions>
          <HeaderCaption
            heading={t('extend-reach')}
            caption={t('extend-reach-text')}
            color='#000'
            textAlign='left'
            captionLength='80%'
            alignItems='flex-start'
          />
          <Right>
            <Actions>
              {activeTab === t('buyers')
                ? merchantActions
                    .filter((it, idx) => idx > 1)
                    .map((action, index) => (
                      <ServiceCard
                        key={action.caption}
                        bgColor='#F9F9F9'
                        width='80vw'
                        margin='8px'
                        padding='15px'
                      >
                        <HeaderCaption
                          heading={action.title}
                          caption={action.caption}
                          color='#531703'
                          textAlign='left'
                          headingMargin='0px'
                          headingSize='8px'
                        >
                          <ActionCount>
                            <span>{`0${index + 1}`}</span>
                          </ActionCount>
                        </HeaderCaption>
                      </ServiceCard>
                    ))
                : merchantActions
                    .filter((it, idx) => idx <= 1)
                    .map((action, index) => (
                      <ServiceCard
                        key={action.caption}
                        bgColor='#F9F9F9'
                        width='80vw'
                        margin='8px'
                        padding='15px 15px'
                      >
                        <HeaderCaption
                          heading={action.title}
                          caption={action.caption}
                          color='#531703'
                          textAlign='left'
                          headingMargin='0px'
                          headingSize='8px'
                        >
                          <ActionCount>
                            <span>{`0${index + 1}`}</span>
                          </ActionCount>
                        </HeaderCaption>
                      </ServiceCard>
                    ))}
            </Actions>
          </Right>
        </MerchantActions>
      </SectionWrapper>
      <SectionWrapper height={100} padding='44px'>
        <HeaderCaption
          heading={t('terre-basics')}
          caption={t('trending-products')}
          showCaption={false}
          flexDirection='row-reverse'
          textAlign='left'
          color='#000'
          captionLength='50%'
          headingSize='16px'
          headingLength='100%'
          headingJustify='space-between'
          headingAlign='center'
          headingFlex='row'
          headingDisplay='flex'
        >
          <Button
            bgColor='transparent'
            color='#E63F07'
            text='See All'
            boxShadow='none'
            onClick={() => navigate(path.HERBSANDSPICES)}
            width='8%'
          />
        </HeaderCaption>
        <ServicesContainer
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '25px'
          }}
        >
          {productDict?.products ? (
            productDict?.products.map((product) => (
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
                  amount:
                    productDict.productStocks?.[product.id]?.[0]?.unitPrice,
                  unit: productDict.productStocks?.[product.id]?.[0]
                    ?.unitMeasure,
                }}
                onClick={() => navigate(`/product-detail/${product.id}`)}
                countryFlag={
                  countries[product.originCountryId as CountryCode].flag?.flag
                }
                company={
                  productDict.productSuppliers?.[product.sellerProfileId]
                    ?.merchantName
                }
              />
            ))
          ) : (
            <NoItem />
          )}
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height='50vh'>
        <Carousel>
          {testimonials.map((item) => (
            <CarouselItem width={'100%'} key={item.text + item.username}>
              <Testimonial text={item.text}>
                <HeaderCaption
                  heading={item.username}
                  caption={item.userTitle}
                  color='#000'
                  headingSize='6px'
                  headingMargin='20px 0px 0px 0px'
                  captionSize='9px'
                  captionMargin='4px'
                />
              </Testimonial>
            </CarouselItem>
          ))}
        </Carousel>
      </SectionWrapper>
      <SectionWrapper height={100} padding='44px'>
        <HeaderCaption
          heading={t('terre-blog')}
          caption={t('blog-articles')}
          alignItems='flex-start'
          textAlign='left'
          color='#000'
          captionLength='30%'
          headingSize='16px'
          headingLength='20%'
        />
        <ServicesContainer>
          {blogData
            .filter((d, idx) => idx < 3)
            .map((data, idx) => (
              <BlogCard
                key={data.id}
                date={data.date}
                tradeType={data.tradeType}
                caption={data.caption}
                heading={data.heading}
                bgImage={data.bgImage}
                margin={idx === 1 ? '0px 16px' : ''}
                onClick={() => navigate(`/blog/cultivation/${data.id}`)}
              />
            ))}
        </ServicesContainer>
        <div
          style={{
            width: '100%',
            display: 'flex',
            marginTop: '20px',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            text={t('read-more')}
            bgColor='transparent'
            color='rgba(230, 63, 7, 1)'
            iconAfter
            padding='0px'
            fontSize='13px'
            renderIcon={() => (
              <ArrowForward style={{ width: '13px', height: '13px' }} />
            )}
            onClick={() => navigate(path.BLOG)}
            boxShadow='none'
          />
        </div>
      </SectionWrapper>
      <SectionWrapper padding='0px' height={40}>
        <Contact />
      </SectionWrapper>
      <SectionWrapper height={100}>
        <div
          style={{
            backgroundColor: '#FDF0EC',
            borderRadius: '6px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 0px 50px',
          }}
        >
          <HeaderCaption
            heading={t('browse-catalog-text')}
            renderIcon={() => (
              <Button
                text={t('browse-catalog')}
                bgColor='rgba(230, 63, 7, 1)'
                width={20}
                onClick={() => navigate(path.HERBSANDSPICES)}
              />
            )}
            color='rgba(83, 23, 3, 1)'
            headingLength='50%'
          />
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Landing;
