import React from 'react';
import {
  Heading,
  Caption,
  Container,
  headerCaptionProps,
  H1heading
} from './HeaderCaption.styles';

const HeaderCaption = ({
  width = '',
  color = '#fff',
  textAlign = 'center',
  MtextAlign = 'left',
  HtextAlign = 'left',
  heading,
  height = '',
  caption,
  headingLength = '100%',
  headingMargin = '',
  headingSize = '15px',
  headingColor = '',
  captionLength = '100%',
  captionMargin = '',
  captionSize = '16px',
  captionColor = '',
  marginTop = '10px',
  alignItems = 'center',
  justifyContent = 'center',
  flexDirection = 'column',
  showCaption = true,
  showHeading = true,
  children,
  showHeadingRightContent,
  renderIcon,
  headingJustify,
  headingAlign,
  headingFlex,
  headingDisplay,
  numberOfLines,
  headingStyle
}: headerCaptionProps) => {
  return (
    <Container
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexDirection={flexDirection}
      width={width}
      color={color}
      height={height}
      marginTop={marginTop}
    >
      {children}
      {
        showHeading && (
        <Heading
          headingSize={headingSize}
          headingLength={headingLength}
          textAlign={textAlign}
          headingMargin={headingMargin}
          headingColor={headingColor}
          headingJustify={headingJustify}
          headingAlign={headingAlign}
          headingFlex={headingFlex}
          headingDisplay={headingDisplay}
          style={headingStyle}
        >
          <H1heading HtextAlign={HtextAlign} MtextAlign={MtextAlign}>{heading}</H1heading>
          {showHeadingRightContent?.()}
        </Heading>
        )
      }
      {showCaption && (
        <Caption
          captionSize={captionSize}
          captionLength={captionLength}
          textAlign={textAlign}
          captionMargin={captionMargin}
          captionColor={captionColor}
          numberOfLines={numberOfLines}
        >
          <p>{caption}</p>
        </Caption>
      )}
      {renderIcon?.()}
    </Container>
  );
};

export default HeaderCaption;
