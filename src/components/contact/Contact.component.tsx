import React from 'react';
import mapImage from '../../assets/pictures/map.png';
import { Container, ContactDetails } from './Contact.styles';
import ContactForm from './ContactForm.component';
import ContactInfo from './ContactInfo.component';

const Contact = () => {
  return (
    <Container style={{ backgroundImage: `url(${mapImage})` }}>
      <ContactDetails>
        <ContactInfo />
      </ContactDetails>
      <div>
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
