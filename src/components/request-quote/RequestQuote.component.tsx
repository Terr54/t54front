import React from 'react'
import Button from '../commons/controls/button/Button.component'
import Input from '../commons/input/Input.component'
import TextArea from '../commons/input/TextArea'
import ModalWrapper from '../modal-wrapper/ModalWrapper.component'
import { Label, Quantities, StyledButton } from './RequestQuote.styles'

interface requestSampleProps {
  showModal?: boolean,
  onClose?: () => void
}

const RequestQuote = ({ showModal, onClose }: requestSampleProps) => {
  return (
    <ModalWrapper heading='Request Quote' showModal={showModal} onClose={onClose} height='86%'>
        <Input label='Request Date' />
        <Label> <span>Quantity</span></Label>
        <Quantities>
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
            <StyledButton text='500 g' bgColor='#F6F6F6' color='#000' />
        </Quantities>
        <Input placeholder='placeholder' />
        <Input label='Payment Term' placeholder='Select your preferred option' />
        <TextArea label='Other information' placeholder='Specify your needs, packaging requirements, etc' width='95%' />
        <Button text='Request Quote' bgColor='#E63F07' width='100%' />
    </ModalWrapper>
  )
}

export default RequestQuote
