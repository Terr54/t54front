import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../../components/commons/controls/button/Button.component'
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component'
import Contact from '../../components/contact/Contact.component'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container'

const ContactUs = () => {
  const { t } = useTranslation()
  return (
    <div>
      <SectionWrapper padding='0px' height={40}>
        <Contact />
      </SectionWrapper>
        <SectionWrapper height={80}>
          <div
            style={{
              backgroundColor: '#FDF0EC',
              borderRadius: '6px',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px 0px 50px'
            }}
          >
            <HeaderCaption
              heading={t('sign-up-to-start')}
              renderIcon={() => (
                <Button
                  text={t('signup-now')}
                  bgColor="rgba(230, 63, 7, 1)"
                  width={20}
                />
              )}
              color="rgba(83, 23, 3, 1)"
              headingLength="50%"
            />
          </div>
        </SectionWrapper>
    </div>
  )
}

export default ContactUs
