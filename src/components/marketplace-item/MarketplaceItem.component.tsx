import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../commons/controls/button/Button.component';
import HeaderCaption from '../commons/header-caption/HeaderCaption.component';
import {
  Container,
  Image,
  marketplaceItemProps
} from './MarketplaceItem.styles';

const MarketplaceItem = ({
  heading,
  caption,
  itemImage,
  onClick,
  width
}: marketplaceItemProps) => {
  const { t } = useTranslation();

  return (
    <Container width={width}>
      <HeaderCaption
        heading={heading}
        caption={caption}
        textAlign="left"
        renderIcon={() => (
          <Button text={t('learn-more')} bgColor="#E63F07" onClick={onClick} style={{ marginTop: 20 }} />
        )}
        color="#304208"
        headingLength="80%"
        captionLength="76%"
        alignItems='flex-start'
        captionMargin='0px 0px 10px 0px'
        headingSize='21px'
      />
      <Image>
        <img src={itemImage} alt="item image" />
      </Image>
    </Container>
  );
};

export default MarketplaceItem;
