import React from 'react'
import Button from '../commons/controls/button/Button.component'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import Input from '../commons/input/Input.component'
import ModalWrapper from '../modal-wrapper/ModalWrapper.component'
import { Label, subscriptionProps } from './Subscription.styles'

const Subscription = ({ showModal, onClose }: subscriptionProps) => {
  return (
    <ModalWrapper showModal={showModal} onClose={onClose} height='61%'>
      <Label>Subscribe to our emailing list</Label>
      <HeaderCaption color='#000' heading='Be the first to know' caption='Get a weekly dose of articles and resources curated by experts at Terre54 to help you make the right decisions while sourcing or selling agro-products. No spam. Unsubscribe at anytime.' textAlign='left' headingMargin='6px 0px' headingSize='11px' captionSize='13px' />
      <Input placeholder='your email' label='Your email' margin='12px 0px 0px' />
      <Label>Please refer to our <span style={{ color: '#E63F07' }}>privary policy</span> for more details</Label>
      <Button text='Submit' bgColor='#E63F07' margin='40px 0px 10px' width='100%' />
    </ModalWrapper>
  )
}

export default Subscription
