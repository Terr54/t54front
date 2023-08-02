import { useState } from 'react';
import Hero from '../../components/commons/hero/Hero.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import {
  Container,
  Background,
  Overlay
} from './AboutUs.styles';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import mascort from '../../assets/pictures/mascort.png';
import { ServicesContainer } from '../landing/Landing.styles';
import ServiceCard from '../../components/ServiceCard/ServiceCard.component';
import { ArrowForward, CheckCircle } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import Button from '../../components/commons/controls/button/Button.component';
import sharing from '../../assets/pictures/sharing.jpg';
import equity from '../../assets/pictures/equity.jpg';
import diversity from '../../assets/pictures/diversity.jpg';
import mission from '../../assets/pictures/mission.jpg';
import TextImage from '../../components/text-image/TextImage.component';
import { path } from '../../routes/paths';
import { useNavigate } from 'react-router-dom';
import vision from '../../assets/pictures/vision.jpg';
import about from '../../assets/pictures/seed.jpg';
import Subscribe from '../../components/subscribe/Subscribe.component';

const AboutUs = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [showMore, setShowMore] = useState(false);
  const text: string = t('ecommerce-platform-text');
  const text1: string = t('warehousing-storage-text');
  const text2: string = t('enagage-source-monitoring');
  const text3: string = t('need-advice-on-products');
  let cardHeight: string = '50vh';
  let cardHeightMobile: string = '50vh';
  showMore ? cardHeight = '650px' : cardHeight = '50vh';
  showMore ? cardHeightMobile = '80vh' : cardHeightMobile = '50vh';
  return (
    <Container>
      <SectionWrapper height='80vh' padding='' Mheight= '50vh'>
        <Hero bgImage={about}>
          <HeaderCaption
            HtextAlign='center'
            heading={t('about-t54')}
            caption={t('about-us-text')}
            captionLength='55%'
            headingSize='28px'
            textAlign='center'
          />
        </Hero>
      </SectionWrapper>
      <SectionWrapper height='100vh' width='100%' padding='44px' Mheight='100%' mPadding='25px'>
        <TextImage heading={t('our-mission')} image={mission} description={t('mission-text')} flexDirection='row-reverse' />
        <TextImage heading={t('our-vision')} image={vision} description={t('vision-text')}/>
      </SectionWrapper>
      <SectionWrapper height={100} marginTop='0px' width='100%' padding='44px'>
        <HeaderCaption
          heading={t('terre-values')}
          caption={t('terre-values-text')}
          alignItems='flex-start'
          textAlign='left'
          color='#000'
          captionLength='36%'
          headingSize='16px'
          headingLength='20%'
          HtextAlign='left'
        />
        <ServicesContainer>
        <Background bgImage={sharing}>
            <Overlay>
              <ServiceCard padding='18px' >
                <HeaderCaption
                  heading={t('diversity')}
                  caption={t('diversity-text')}
                  textAlign='left'
                  headingSize='12px'
                  captionSize='17px'
                  alignItems='flex-start'
                  color='#fff'
                  width='100%'
                  HtextAlign='left'
                >
                  <CheckCircle
                    style={{
                      color: '#86B817',
                      fontSize: '18px',
                      marginBottom: '15px'
                    }}
                  />
                </HeaderCaption>
              </ServiceCard>
            </Overlay>
          </Background>
          <Background bgImage={equity}>
            <Overlay>
              <ServiceCard padding='18px'>
                <HeaderCaption
                  heading={t('equity')}
                  caption={t('equity-text')}
                  textAlign='left'
                  headingSize='12px'
                  captionSize='17px'
                  alignItems='flex-start'
                  color='#fff'
                  HtextAlign='left'
                >
                  <CheckCircle
                    style={{
                      color: '#86B817',
                      fontSize: '18px',
                      marginBottom: '15px'
                    }}
                  />
                </HeaderCaption>
              </ServiceCard>
            </Overlay>
          </Background>
          <Background bgImage={diversity}>
            <Overlay>
              <ServiceCard padding='18px' width='30vw' height='30vh'>
                <HeaderCaption
                  heading={t('partnership')}
                  caption={t('partnership-text')}
                  textAlign='left'
                  headingSize='12px'
                  captionSize='17px'
                  alignItems='flex-start'
                  color='#fff'
                  HtextAlign='left'
                >
                  <CheckCircle
                    style={{
                      color: '#86B817',
                      fontSize: '18px',
                      marginBottom: '15px'
                    }}
                  />
                </HeaderCaption>
              </ServiceCard>
            </Overlay>
          </Background>
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper
        padding="44px"
        height={100}
      >
        <HeaderCaption
          heading={t('we-offer')}
          color="#000"
          textAlign="left"
          headingLength="100%"
          HtextAlign='left'
        />
        <ServicesContainer>
          <ServiceCard
            bgColor="rgba(253, 240, 236, 1)"
            margin = '0px 8px 0px 0px'
            heightMobile='30vh'
          >
            <HeaderCaption
              heading={t('ecommerce-platform')}
              caption={showMore ? text : `${text.substring(0, 100)}`}
              color="rgba(83, 23, 3, 1)"
              textAlign="left"
              headingSize="13px"
              headingLength="80%"
              alignItems="flex-start"
              HtextAlign='left'
            />
            <Button
              text={ showMore ? t('show-less') : t('learn-more')}
              bgColor="transparent"
              color="rgba(230, 63, 7, 1)"
              iconAfter
              padding="0px"
              onClick={() => setShowMore(!showMore)}
              renderIcon={() => <ArrowForward fontSize="small" />}
              boxShadow = 'none'
            />
          </ServiceCard>
          <ServiceCard
            bgColor="rgba(246, 249, 237, 1)"
            heightMobile='30vh' renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor="transparent"
                color="rgba(230, 63, 7, 1)"
                iconAfter
                padding="0px"
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize="small" />}
                boxShadow = 'none'
              />
            )}
          >
            <HeaderCaption
              heading={t('warehousing-storage')}
              caption={showMore ? text1 : `${text1.substring(0, 100)}`}
              color="rgba(48, 66, 8, 1)"
              textAlign="left"
              headingSize="13px"
              alignItems="flex-start"
              HtextAlign='left'
            />
          </ServiceCard>
          <ServiceCard
            bgColor="rgba(254, 251, 239, 1)"
            heightMobile='30vh' renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor="transparent"
                color="rgba(230, 63, 7, 1)"
                iconAfter
                padding="0px"
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize="small" />}
                boxShadow = 'none'
              />
            )}
          >
            <HeaderCaption
              heading={t('source-monitoring')}
              caption={showMore ? text2 : `${text2.substring(0, 100)}`}
              color="rgba(88, 73, 17, 1)"
              textAlign="left"
              headingSize="13px"
              alignItems="flex-start"
              HtextAlign='left'
            />
          </ServiceCard>
          <ServiceCard
            bgColor="rgba(236, 244, 255, 1)"
            heightMobile='30vh' renderIcon={() => (
              <Button
                text={showMore ? t('show-less') : t('learn-more')}
                bgColor="transparent"
                color="rgba(230, 63, 7, 1)"
                iconAfter
                padding="0px"
                onClick={() => setShowMore(!showMore)}
                renderIcon={() => <ArrowForward fontSize="small" />}
                boxShadow = 'none'
              />
            )}
          >
            <HeaderCaption
              heading={t('consulting-services')}
              caption={showMore ? text3 : `${text3.substring(0, 100)}`}
              color="Consulting Services"
              textAlign="left"
              headingSize="13px"
              alignItems="flex-start"
              HtextAlign='left'
            />
          </ServiceCard>
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100} padding='0px 44px 0px'>
        <div
          style={{
            backgroundColor: '#FDF0EC',
            borderRadius: '6px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '30px 0px 50px'
          }}
        >
          <HeaderCaption
            heading={t('browse-catalog-text')}
            renderIcon={() => (
              <Button
                text={t('browse-catalog')}
                bgColor='rgba(230, 63, 7, 1)'
                width={16}
                onClick={() => navigate(path.MARKET)}
              />
            )}
            color='rgba(83, 23, 3, 1)'
            headingLength='60%'
            HtextAlign='center'
          />
        </div>
      </SectionWrapper>
      <Subscribe />
      {/* <HeaderCaption
        heading={t('team')}
        color='rgba(83, 23, 3, 1)'
      />
      <TeamMembersContainer>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
        <TeamMembers>
          <TeamMembersImage teamImage={man} />
          <TeamMemberName>
            <p style={{ fontSize: '20px', fontWeight: 800, marginBottom: '-10px' }}>Jhon Snow</p>
            <p> {t('designer')} </p>
          </TeamMemberName>
        </TeamMembers>
      </TeamMembersContainer> */}
    </Container>
  );
};

export default AboutUs;
