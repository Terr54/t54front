import React from 'react';
import {
  Container,
  VideoContainer,
  videoPresentationProps
} from './VideoPresentation.styles';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { VideoJSPlayer } from '../video-player/VideoJS.component';
import { useTranslation } from 'react-i18next';

const VideoPresentation = ({
  videoImg,
  children,
  color = '#000',
  flexDirection
}: videoPresentationProps) => {
  const { t } = useTranslation();
  return (
    <SectionWrapper height="65vh" Mheight="40vh" mPadding='auto' padding='44px'>
      <Container color={color} flexDirection={flexDirection}>
        <VideoContainer>
          <VideoJSPlayer
            options={{
              poster: videoImg,
              controls: true,
              responsive: true,
              fluid: true,
              autoplay: false,
              sources: [{
                src: t('promo-video-src'),
                type: 'video/mp4'
              }]
            }}
            className="hide-play-btn"
          />
        </VideoContainer>
        <div>
          {children}
        </div>
      </Container>
    </SectionWrapper>

  );
};

export default VideoPresentation;
