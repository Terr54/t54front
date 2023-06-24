import React, { useState } from 'react'
import Button from '../commons/controls/button/Button.component'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import Input from '../commons/input/Input.component'
import { Container, SubscribeBtn } from './NewsletterSignup.styles'
import { t } from 'i18next'
import toast from 'react-hot-toast'
import { subscribeToNewsLetter } from '../../api/newsletter'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState<boolean>();

  const subscribe = () => {
    subscribeToNewsLetter(email, 'weekly-info').then(
      () => {
        toast.success(t('subscription-aded'));
        setEmail('');
      }
    ).catch(() => {
      toast.error(t('subscription-failed'))
    })
  }
  return (
    <Container>
      <HeaderCaption color='#000' heading='Sign Up to Our Newsletter' caption='Get the latest articles on all things agro e-commerce delivered straight to your inbox' textAlign='left' headingSize='9px' captionMargin='0px' />
      <Input
        label='Your Email'
        margin='15px 0px'
        placeholder='youremail@email.com'
        value={email}
        onChange={e => {
          setEmail(e?.target?.value);
          setEmailValid(e?.target?.validity?.valid)
        }}
      />
      <SubscribeBtn>
        <Button
          onClick={subscribe}
          disabled={isEmailValid != undefined && !isEmailValid}
          text='Subscribe'
          border='2px solid #E63F07'
          padding='9px'
          color='#E63F07'
          bgColor='#fff'
          width='100%'
        />
      </SubscribeBtn>
      <div style={{ height: '1.5px', backgroundColor: '#D1D1D1', width: '96%' }} />
    </Container>
  )
}

export default NewsletterSignup
