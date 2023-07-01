import React, { Fragment, useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import productImg from '../../assets/pictures/spices.png'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import NigerianFlag from '../../assets/pictures/NigerianFlag.svg';
import Button from '../commons/controls/button/Button.component';
import { Container, CoverImages, Details, MiniImages, BigImage, Heading, productPreviewProps, Bookmark, Country, Span, Quantity, SubInfo, Info, ActionButtons } from './ProductPreview.styles';
import RequestSample from '../request-sample/RequestSample.component';
import RequestQuote from '../request-quote/RequestQuote.component';
import Rating from '../rating/Rating.component';
import { ProductResponse } from '../../domain/domain';
import countries, { CountryCode } from '../../utils/contrycodes';
import { useTranslation } from 'react-i18next';

export interface ProductPreviewProp {
  payload: ProductResponse
}

const ProductPreview = ({ payload }: ProductPreviewProp) => {
  const [requestSample, setRequestSample] = useState(false);
  const [requestQuote, setRequestQuote] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { t, i18n } = useTranslation();
  const { product, productDetails, productStocks, mediaSlots } = payload ?? {};
  const stock = productStocks?.[0];
  return (
    <SectionWrapper padding='20px 44px 0px'>
    <Container >
        {
          mediaSlots?.length > 0
            ? (
              <CoverImages>
                <MiniImages>
                  {
                    mediaSlots.map((slot, i) => (
                      <Fragment key={slot.id}>
                          <img
                            onMouseEnter={() => setActiveImage(i)}
                            src={slot.src}
                            alt={slot.fileName}
                          />
                      </Fragment>
                    ))
                  }
                </MiniImages>
                <BigImage image={mediaSlots[activeImage]?.src}>
                  <Bookmark>
                      <BookmarkBorderIcon style={{ color: 'white' }} />
                  </Bookmark>
                </BigImage>
              </CoverImages>
              )
            : null
        }
      <Details>
        <div>
        <Heading>{product?.name}</Heading>
        <Span color='#E63F07'>{t(product?.category?.substring('product.'.length))}</Span>
        <Country>
          <Span>
            <span style={{ color: '#666666', marginRight: '8px' }}>Origin:</span>
            { countries[product?.originCountryId as CountryCode].flag?.flag }
          </Span>
          <Span style={{ marginLeft: '3px' }}>
          { countries[product?.originCountryId as CountryCode].name[i18n.language as 'en' | 'fr'] }
          </Span>
        </Country>
        <Rating rating={4} ratedNum={2} />
        {
          stock
            ? (
            <>
              <Span color='#666666' style={{ marginTop: '10px' }}>
                  {stock?.currency} <Quantity>{stock?.unitPrice}</Quantity> / {stock?.unitMeasure}
              </Span>
              <SubInfo>
                {/* <Info>Minimum order quantity (MOQ): <span>N/A</span></Info>
                <Info>Packaging: <span>N/A</span></Info>
                <Info>Processing: <span>N/A</span></Info>
                <Info>Incoterm: <span>N/A</span></Info> */}
              </SubInfo>
            </>
              )
            : null
        }
        </div>
        <ActionButtons>
          <Button text={t('request-sample')} bgColor='#fff' border='1px solid #E63F07' color='#E63F07' width='100%' onClick={() => setRequestSample(true)} />
          <Button text={t('request-quote')} bgColor='#E63F07' width='100%' margin='0px 0px 0px 15px' onClick={() => setRequestQuote(true)} />
        </ActionButtons>
      </Details>
    </Container>
    <RequestQuote stock={stock} product={product} showModal={requestQuote} onClose={() => setRequestQuote(false)} />
    <RequestSample productId={payload?.product?.id} showModal={requestSample} onClose={() => setRequestSample(false)} />
    </SectionWrapper>
  )
}

export default ProductPreview
