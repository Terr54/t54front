import { ReactNode } from 'react';
import styled from '@emotion/styled';

export interface headerCaptionProps {
  width?: string;
  color?: string;
  textAlign?: string;
  MtextAlign?: string;
  HtextAlign?: string;
  heading?: string;
  headingLength?: string | number;
  headingSize?: string;
  headingMargin?: string;
  headingColor?: string;
  showHeading?: boolean;
  caption?: string;
  captionLength?: string | number;
  captionSize?: string;
  captionMargin?: string;
  captionColor?: string;
  marginTop?: string;
  showCaption?: boolean;
  renderIcon?: () => ReactNode;
  alignItems?: string;
  height?: string;
  justifyContent?: string;
  flexDirection?: string;
  children?: ReactNode | ReactNode[];
  showHeadingRightContent?: () => ReactNode;
  onClick?: () => void;
  headingJustify?: string;
  headingAlign?: string;
  headingFlex?: string
  headingDisplay?: string;
  numberOfLines?: number;
  headingStyle?: object
}

export const Container = styled.div<headerCaptionProps>`
  width: ${({ width }) => (typeof width === 'string' ? width : `${width}%`)};
  color: ${({ color }) => color};
  display: flex;
  z-index: 1;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirection }) => flexDirection};
  z-index: 1;
  @media (max-width: 768px) {
    width: 90%;
    margin-top: ${({ marginTop }) => marginTop};
    height: ${({ height }) => height};
  };

  
`;
export const H1heading = styled.h1<headerCaptionProps>`
 margin: ${({ headingMargin }) => (headingMargin ?? '0px')};
  text-align: ${({ HtextAlign }) => HtextAlign};
   @media (max-width: 768px) {
    width: 100%;
    z-index: 1;
    text-align: ${({ MtextAlign }) => MtextAlign};

  };
`;
export const Heading = styled.div<headerCaptionProps>`
  font-size: ${({ headingSize }) =>
    typeof headingSize === 'string' ? headingSize : `${headingSize}px`};
  width: ${({ headingLength }) =>
    typeof headingLength === 'string' ? headingLength : `${headingLength}%`};
  white-space: pre-wrap;
  word-wrap: break-word;
  color: ${({ headingColor }) => headingColor};
  display: ${({ headingDisplay }) => headingDisplay};
  justify-content: ${({ headingJustify }) => headingJustify};
  align-items: ${({ headingAlign }) => headingAlign};
  flex-direction: ${({ headingFlex }) => headingFlex};
  @media (max-width: 768px) {
    width: 100%;
    z-index: 1;

  };
  
`;

export const Caption = styled(Heading)<headerCaptionProps>`
  font-size: ${({ captionSize }) =>
    typeof captionSize === 'string' ? captionSize : `${captionSize}px`};
  width: ${({ captionLength }) =>
    typeof captionLength === 'string' ? captionLength : `${captionLength}%`};
  & > p {
    margin: ${({ captionMargin }) =>
      captionMargin ?? '18px 0px'};
    text-align: ${({ textAlign }) => textAlign};
  };
  display: ${({ numberOfLines }) => numberOfLines ? '-webkit-box' : ''};
  -webkit-line-clamp: ${({ numberOfLines }) => numberOfLines ?? ''};
  -webkit-box-orient: vertical;
  overflow: ${({ numberOfLines }) => numberOfLines ? 'hidden' : ''};;
  text-overflow: ${({ numberOfLines }) => numberOfLines ? 'ellipses' : ''};
  color: ${({ captionColor }) => captionColor};
   @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
