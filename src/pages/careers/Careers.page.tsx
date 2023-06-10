import React from 'react'
import { useTranslation } from 'react-i18next';

import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component'
import Hero from '../../components/commons/hero/Hero.component'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container'
import { Container } from './Careers.styles';
import aboutHero from '../../assets/pictures/about-hero.png';

const Careers = () => {
  const { t } = useTranslation();
  return (
    <Container>
       <SectionWrapper height='65vh'>
        <Hero bgImage={aboutHero}>
          <HeaderCaption
            heading={t('about-t54')}
            caption={t('about-us-text')}
            captionLength='55%'
          />
        </Hero>
      </SectionWrapper>
    </Container>
  )
}

export default Careers
