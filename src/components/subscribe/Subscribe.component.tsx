import { useState } from 'react'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container'
import Button from '../commons/controls/button/Button.component'
import Input from '../commons/input/Input.component'
import planeGreen from '../../assets/pictures/planeGreen.svg'
import planeOrange from '../../assets/pictures/planeOrange.svg'
import HeaderCaption from '../commons/header-caption/HeaderCaption.component'
import { useTranslation } from 'react-i18next'
import { subscribeToNewsLetter } from '../../api/newsletter'
import { toast } from 'react-hot-toast'

const Subscribe = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isEmailValid, setEmailValid] = useState<boolean>();

  const subscribe = () => {
    subscribeToNewsLetter(email, 'weekly-info').then(
      () => {
        toast.success(t('subscription-aded'));
        setEmail('');
      }
    ).catch(() => {
      toast.error(t('subscription-failed'))
    })
  }

  return (
    <SectionWrapper height={100} padding='44px'>
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
              <Input placeholder={t('your-email')} width="65%" containerStyle={{ paddingRight: '0px', border: 'none', backgroundColor: '#fff' }}>
                <Button
                  text={t('subscribe-text')}
                  bgColor="rgba(230, 63, 7, 1)"
                  width={45}
                  style={{ borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px' }}
                  disabled={isEmailValid != undefined && !isEmailValid}
                  onClick={subscribe}
                />
              </Input>
            )}
            color="rgba(83, 23, 3, 1)"
            headingLength='70%'
            captionLength='70%'
          />
          <div style={{ display: 'flex' }}>
            <img src={planeGreen} style={{ width: '14vw', height: '18vh' }} alt='plane_pic' />
            <img src={planeOrange} style={{ width: '18vw', height: '22vh', marginTop: '40px' }} alt='plane_pic' />
          </div>
        </div>
      </SectionWrapper>
  )
}

export default Subscribe
