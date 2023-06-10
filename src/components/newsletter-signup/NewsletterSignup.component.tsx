import React from 'react'
import Button from '../commons/controls/button/Button.component'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import Input from '../commons/input/Input.component'
import { Container, SubscribeBtn } from './NewsletterSignup.styles'

const NewsletterSignup = () => {
  return (
    <Container>
      <HeaderCaption color='#000' heading='Sign Up to Our Newsletter' caption='Get the latest articles on all things agro e-commerce delivered straight to your inbox' textAlign='left' headingSize='9px' captionMargin='0px' />
      <Input label='Your Email' margin='15px 0px' placeholder='youremail@email.com' />
      <SubscribeBtn>
        <Button text='Subscribe' border='2px solid #E63F07' padding='9px' color='#E63F07' bgColor='#fff' width='100%' />
      </SubscribeBtn>
      <div style={{ height: '1.5px', backgroundColor: '#D1D1D1', width: '96%' }} />
    </Container>
  )
}

export default NewsletterSignup
