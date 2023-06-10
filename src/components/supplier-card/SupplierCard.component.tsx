import React from 'react';
import { Container, Image, supplierCardProps } from './SupplierCard.styled';
import placeholder from '../../assets/pictures/profile-placeholder.png';

const SupplierCard = ({ supplierLogo, title }: supplierCardProps) => {
  return (
    <Container>
      <Image>
        <img src={supplierLogo ?? placeholder} />
      </Image>
      <span>{title}</span>
    </Container>
  )
}

export default SupplierCard
