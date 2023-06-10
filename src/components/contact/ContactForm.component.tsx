import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../commons/controls/button/Button.component'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import Input from '../commons/input/Input.component'
import TextArea from '../commons/input/TextArea'
import { FormContainer } from './Contact.styles'

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <FormContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HeaderCaption heading={t('get-in-touch')} caption={t('hear-from-you')} color="#493D39" textAlign='left' headingMargin='0px' captionMargin='6px 0px 15px 0px' headingSize="12px" />
        <Input placeholder='Samuel Sampson' label={t('your-name')} margin='5px 0px' />
        <Input placeholder='samuelsampson@email.com' label={t('email-address')} margin='5px 0px' />
        <Input placeholder='Subject of Inquiry/Message' label={t('service-confirmation')} margin='5px 0px' />
        <TextArea placeholder="Your message" label={t('your-message')} width={46} style={{ marginBottom: '20px' }} />
        <a href="mailto:Contact@terre54.co" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}>
          <Button text={t('submit-info')} bgColor='#E63F07' margin='20px 0px 0px' width='50%' />
        </a>
      </div>
    </FormContainer>
  )
}

export default ContactForm
