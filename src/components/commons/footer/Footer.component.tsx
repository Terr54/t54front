import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionWrapper from '../../../containers/SectionWrapper/SectionWrapper.container';
import HeaderCaption from '../header-caption/HeaderCaption.component';
import Logo from '../logo/Logo';
import { Container } from './Footer.styles';
import FooterColumn from './FooterColumn';
import { path } from '../../../routes/paths';

const Footer = () => {
  const { t } = useTranslation();

  const company = [
    {
      id: 0,
      label: t('footer-about'),
      to: path.ABOUT
    },
    {
      id: 1,
      label: t('footer-careers'),
      to: path.CAREERS
    },
    {
      id: 2,
      label: t('footer-contact'),
      to: path.CONTACT
    },
    {
      id: 3,
      label: t('footer-privacy-policy'),
      path: 'privacy-policy',
      to: path.PRIVACY_POLICY
    },
    {
      id: 4,
      label: t('footer-terms-of-service'),
      to: path.TERMS_OF_SERVICE
    }
  ];

  const products = [
    {
      id: 0,
      label: t('footer-marketplace'),
      to: path.MARKET
    },
    {
      id: 1,
      label: t('footer-houses'),
      to: 'terre-houses'
    },
    {
      id: 2,
      label: t('footer-logistics'),
      to: 'terre-logistics'
    }
  ];

  const resources = [
    {
      id: null,
      label: t('footer-blog'),
      path: 'terre54-blog',
      to: path.BLOG
    },
    {
      id: 1,
      label: t('ginger-farmers-model'),
      path: 'ginger-farmers-model',
      to: 'https://terre54africa.blogspot.com/2022/11/small-holder-farmers.html'
    },
    {
      id: 2,
      label: t('ginger-in-nigeria'),
      path: 'ginger-in-nigeria',
      to: 'https://terre54africa.blogspot.com/2022/11/ginger-in-nigeria.html'
    }
  ];

  return (
    <SectionWrapper height={100} bgColor="#531703" padding='44px 44px 10px'>
      <Container>
        <div>
          <Logo width={102} height={35} />
          <HeaderCaption
            heading={t('extend-reach')}
            caption={t('extend-reach-text')}
            textAlign="left"
            headingSize="10px"
            captionSize="12px"
            captionLength="72%"
            headingMargin="22px 0px 0px"
            alignItems='flex-start'
            captionMargin='20px 0px'
            HtextAlign='left'
            headingStyle={{ marginTop: '20px' }}
            MtextAlign='left'
          />
        </div>
        <FooterColumn heading={t('footer-company')} values={company} />
        <FooterColumn heading={t('footer-products')} values={products} comingSoon />
        <FooterColumn heading={t('footer-resources')} values={resources} isBlog />
      </Container>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '1px solid rgba(188, 176, 173, 1)',
          color: '#fff',
          fontSize: '12px'
        }}
      >
        <p style={{ marginTop: '20px' }}>
          <span>Copyright © 2022 Terre54</span>
        </p>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
