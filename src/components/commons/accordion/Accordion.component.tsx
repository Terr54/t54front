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
  texts,
}: accordionProps) => {
  const { t } = useTranslation();
  return (
    <>
      <Header onClick={onClick}>
        <h4 style={{ margin: '0' }}>{heading}</h4>
        {open ? (
          <RemoveCircleOutline
            style={{ color: '#E63F07' }}
            onClick={onClick}
            fontSize='small'
          />
        ) : (
          <AddCircleOutlineIcon
            style={{ color: '#E63F07' }}
            onClick={onClick}
            fontSize='small'
          />
        )}
      </Header>
      {open && (
        <Content>
          <p>{text}</p>
          {texts?.map((txt: any) => (
            <div key={txt.id}>
              <p style={{ fontWeight: 'bold' }}>{t(txt.heading)}</p>
              {typeof(t(txt.text)) === 'string' ? (
                <p>{t(txt.text)}</p>
              ) : (
                txt?.text.map((txtSub: string) => (
                  <ul key={txtSub}>
                    <li>
                      <p>{t(txtSub)}</p>
                    </li>
                  </ul>
                ))
              )}
            </div>
          ))}
          {children}
        </Content>
      )}
    </>
  );
};

export default Accordion;
