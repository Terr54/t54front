import React from 'react';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactDetail from './ContactDetail.component';

import { SocialIcons, Heading, StyledLink } from './Contact.styles';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  const infos = [
    {
      icon: <MailOutlineIcon fontSize="small" />,
      title: t('contact-email'),
      value: ['contact@terre54.co']
    },
    {
      icon: <LocalPhoneOutlinedIcon fontSize="small" />,
      title: t('contact-number'),
      value: ['+33 760926545']
    },
    {
      icon: <PlaceOutlinedIcon fontSize="small" />,
      title: t('contact-address'),
      value: [
        ' Global HQ., Europe, France 17 rue Lamartine 63430, Pont du chateau',
        'Branch, Africa - Nigeria Marigold Gardens Lagos, Nigeria'
      ]
    }
  ];
  return (
    <div
      style={{
        display: 'flex',
        height: '60%',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div>
        <Heading>{t('contact-t54')}</Heading>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '50px'
          }}
        >
          {infos
            .filter((e, i) => i === 0)
            .map((info) => (
              <ContactDetail
                key={`${info.value} + ${info.title}`}
                renderIcon={() => info.icon}
                title={info.title}
                value={info.value}
              />
            ))}
          {infos
            .filter((e, i) => i !== 0 && i !== infos.length - 1)
            .map((info) => (
              <ContactDetail
                key={`${info.value} + ${info.title}`}
                renderIcon={() => info.icon}
                title={info.title}
                value={info.value}
                style={{
                  borderRight: '1px solid #ccc',
                  borderLeft: '1px solid #ccc',
                  alignItems: 'center',
                  margin: '0px 17px',
                  padding: '0px 17px'
                }}
              />
            ))}
          {infos
            .filter((e, i) => i === infos.length - 1)
            .map((info) => (
              <ContactDetail
                key={`${info.value} + ${info.title}`}
                renderIcon={() => info.icon}
                title={info.title}
                value={info.value}
              />
            ))}
        </div>
      </div>
      <SocialIcons>
        <StyledLink href="https://www.linkedin.com/company/terre54" target='_blank' rel="noreferrer"><LinkedInIcon /></StyledLink>
        <StyledLink href='https://twitter.com/terre54' target='_blank' rel="noreferrer">
          <TwitterIcon />
        </StyledLink>
        <StyledLink>
          <InstagramIcon />
        </StyledLink>
        <StyledLink href="https://mobile.facebook.com/terre54africa/about/?__nodl&ref=m.facebook.com&_rdc=1&_rdr#_=_" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </StyledLink>
      </SocialIcons>
    </div>
  );
};

export default ContactInfo;
