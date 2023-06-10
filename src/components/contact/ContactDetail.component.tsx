import React from 'react';
import { ContactDetailContainer, Title, Value } from './Contact.styles';
import { contactDetailProps } from './contactProps';

const ContactDetail = ({ title, value, renderIcon, style }: contactDetailProps) => {
  return (
    <ContactDetailContainer style={style}>
      <div style={{ display: 'flex' }}>
        {renderIcon?.()}
        <Title>
        {title}
        </Title>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
      {value?.map((data) => (
        <Value key={Math.random()}>{data}</Value>
      ))}
      </div>
    </ContactDetailContainer>
  );
};

export default ContactDetail;
