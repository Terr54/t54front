import React from 'react';
import NoData from '../../assets/pictures/no-data.png';
import Button from '../commons/controls/button/Button.component';
import { Container, Image, noDetailProps, Note } from './NoDetail.styles';

const NoDetail = ({
  infoText = '',
  text = '',
  onClick,
  height = '90%',
  renderIcon,
  iconAfter,
  color,
  bgColor = '#E63F07',
  border,
  textMargin
}: noDetailProps) => {
  return (
    <Container height={height}>
      <Note>
        <p>{infoText}</p>
      </Note>
      <Image>
        <img src={NoData} />
      </Image>
      {text && (
        <Button
          text={text}
          bgColor={bgColor}
          width='30%'
          onClick={onClick}
          renderIcon={renderIcon}
          iconAfter={iconAfter}
          color={color}
          border={border}
          textMargin={textMargin}
        />
      )}
    </Container>
  );
};

export default NoDetail;
