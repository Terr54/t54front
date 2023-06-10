import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Content, Header, accordionProps } from './Accordion.styles';
import { RemoveCircleOutline } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Accordion = ({
  text,
  heading,
  onClick,
  open,
  children,
  texts
}: accordionProps) => {
  const { t } = useTranslation()
  return (
    <>
      <Header onClick={onClick}>
        <h4 style={{ margin: '0' }}>{heading}</h4>
        {
          open
            ? (
          <RemoveCircleOutline
            style={{ color: '#E63F07' }}
            onClick={onClick}
            fontSize='small' />
              )
            : (
            <AddCircleOutlineIcon
              style={{ color: '#E63F07' }}
              onClick={onClick}
              fontSize='small'
            />
              )
        }

      </Header>
      {open && (
        <Content>
          <p>{text}</p>
          {texts?.map((t: any) => (
            <div key={t.id}>
              <p style={{ fontWeight: 'bold' }}>{t.heading}</p>
              <p>{t.text}</p>
            </div>
          ))}
          {children}
        </Content>
      )}
    </>
  );
};

export default Accordion;
