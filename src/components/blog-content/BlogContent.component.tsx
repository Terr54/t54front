import React from 'react';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import BlogAuthor from '../blog-author/BlogAuthor.component';
import HeaderCaption from '../commons/header-caption/HeaderCaption.component';
import NewsletterSignup from '../newsletter-signup/NewsletterSignup.component';
import PathHeader from '../path-header/PathHeader.component';
import {
  BlogTextContent,
  Container,
  Image,
  ParagraphText,
  blogContentProps,
} from './BlogContent.styles';

const BlogContent = ({
  path,
  heading,
  caption,
  author,
  date,
  coverImg,
  contentText,
  children,
}: blogContentProps) => {
  return (
    <Container>
      <PathHeader path={path} />
      <SectionWrapper padding='0px 44px 0px 130px' height={100} width='86%'>
        <HeaderCaption
          textAlign='left'
          heading={heading}
          caption={caption}
          color='#210F04'
          headingLength='90%'
          captionMargin='30px 0 0px'
          alignItems='flex-start'
          captionColor='#666666'
          captionLength='90%'
        />
        <BlogAuthor author={author} date={date} />
        <Image>
          <img src={coverImg} alt='farming' />
        </Image>
      </SectionWrapper>
      <SectionWrapper padding='0px 44px 0px 130px' height={100}>
        <BlogTextContent>
          <ParagraphText>{children}</ParagraphText>
          <div>
            <NewsletterSignup />
          </div>
        </BlogTextContent>
      </SectionWrapper>
    </Container>
  );
};

export default BlogContent;
