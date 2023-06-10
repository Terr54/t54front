import React from 'react'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container'
import Button from '../commons/controls/button/Button.component'
import Input from '../commons/input/Input.component'
import planeGreen from '../../assets/pictures/planeGreen.svg'
import planeOrange from '../../assets/pictures/planeOrange.svg'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import { useTranslation } from 'react-i18next'

const Subscribe = () => {
  const { t } = useTranslation();

  return (
    <SectionWrapper height={100}>
        <div
          style={{
            backgroundColor: '#FDF0EC',
            borderRadius: '6px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px'
          }}
        >
          <HeaderCaption
            heading={t('join-farmers')}
            caption={t('get-updates')}
            textAlign='left'
            alignItems='flex-start'
            renderIcon={() => (
              <Input placeholder={t('your-email')} width="75%" containerStyle={{ paddingRight: '0px', border: 'none', backgroundColor: '#fff' }}>
                <Button
                  text={t('subscribe-text')}
                  bgColor="rgba(230, 63, 7, 1)"
                  width={45}
                  style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                />
              </Input>
            )}
            color="rgba(83, 23, 3, 1)"
            headingLength='80%'
            captionLength='80%'
          />
          <div style={{ display: 'flex' }}>
            <img src={planeGreen} style={{ width: '18vw', height: '18vh' }} />
            <img src={planeOrange} style={{ width: '22vw', height: '22vh', marginTop: '40px' }} />
          </div>
        </div>
      </SectionWrapper>
  )
}

export default Subscribe
