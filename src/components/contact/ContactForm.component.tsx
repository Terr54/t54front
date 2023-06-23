import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '../commons/controls/button/Button.component'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import Input from '../commons/input/Input.component'
import TextArea from '../commons/input/TextArea'
import { FormContainer } from './Contact.styles'
import { submitContactForm } from '../../api/newsletter'
import { toast } from 'react-hot-toast'

const ContactForm = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState('');
  const [isEmailValid, setEmailValid] = useState<boolean>();
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const submitForm = () => {
    submitContactForm({
      message,
      subject,
      email,
      name
    }).then(() => {
      toast.success(t('form-submitted'));
      setSubject('');
      setMessage('');
    }).catch(() => {
      toast.error(t('form-submit-failed'));
    })
  }

  return (
    <FormContainer>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <HeaderCaption heading={t('get-in-touch')} caption={t('hear-from-you')} color="#493D39" textAlign='left' headingMargin='0px' captionMargin='6px 0px 15px 0px' headingSize="12px" />
        <Input
          placeholder='Samuel Sampson'
          label={t('your-name')}
          margin='5px 0px'
          value={name}
          onChange={e => { setName(e?.target?.value)}}
        />
        <Input
          placeholder='samuelsampson@email.com'
          label={t('email-address')}
          margin='5px 0px'
          value={email}
          type='email'
          onChange={e => { setEmail(e?.target?.value); setEmailValid(e?.target?.validity?.valid)}}
        />
        <Input
          placeholder={t('service-confirmation')}
          label={t('service-confirmation')}
          margin='5px 0px'
          value={subject}
          onChange={e => { setSubject(e?.target?.value)}}
        />
        <TextArea
          placeholder={t('your-message')}
          label={t('your-message')}
          width={46}
          style={{ marginBottom: '20px' }}
          value={message}
          onChange={e => { setMessage(e?.target?.value)}}
        />
        <Button
          text={t('submit-info')}
          bgColor='#E63F07'
          margin='20px 0px 0px'
          width='50%'
          disabled={!email?.trim() || !subject?.trim() || (isEmailValid != undefined && !isEmailValid)}
          onClick={submitForm}
        />
      </div>
    </FormContainer>
  )
}

export default ContactForm
