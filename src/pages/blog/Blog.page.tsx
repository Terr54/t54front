import BlogHeader from '../../components/blog-header/BlogHeader.component';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { ServicesContainer } from '../landing/Landing.styles';
import BlogCard from '../../components/blog-card/BlogCard.component';
import { blogData } from '../../assets/data/blogData';
import { BlogsMultiple } from './Blog.styles';
import Subscribe from '../../components/subscribe/Subscribe.component';
import { useTranslation } from 'react-i18next';

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <SectionWrapper height={100}>
        <BlogHeader />
        <HeaderCaption
          heading={t('featured-articles')}
          color='#000'
          textAlign='left'
        />
        <ServicesContainer>
          {blogData
            .filter((item, index) => index < 2)
            .map((data) => (
              <BlogCard
                key={data.caption}
                date={data.date}
                tradeType={data.tradeType}
                caption={data.caption}
                heading={data.heading}
                bgImage={data.bgImage}
                coverHeight='62vh'
                coverWidth='44vw'
                style={{ marginRight: '10px' }}
              />
            ))}
        </ServicesContainer>
      </SectionWrapper>
      <SectionWrapper height={100}>
        <HeaderCaption
          heading={t('recent-articles')}
          color='#000'
          textAlign='left'
        />
        <BlogsMultiple>
          {blogData?.map((data) => (
            <BlogCard
              key={data.caption}
              date={data.date}
              tradeType={data.tradeType}
              caption={data.caption}
              heading={data.heading}
              bgImage={data.bgImage}
              coverHeight='42vh'
              coverWidth='29vw'
              style={{ marginRight: '10px' }}
              showCaption={false}
            />
          ))}
        </BlogsMultiple>
      </SectionWrapper>
      <Subscribe />
    </>
  );
};

export default Blog;
