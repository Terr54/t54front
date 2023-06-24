import React from 'react';
import BlogContent from './BlogContent.component';
import cover from '../../assets/pictures/ginger2.png';
import { textParser } from './textParser';
import { blog1, blog2 } from '../../assets/data/blogs';
import classes from './BlogContent.module.css';

const Blog2 = () => {
  return (
    <BlogContent
      author='Nigeria can harvest 2bn from yearly spices export, Agoa,
      Science World Journal Vol. 15(No 3) 2020, Sodangi, I. A.,
      Nourishing africa, 2022,
      ITC trademap,  2018,
      CBI, The European market potential for dried ginger, 2022 '
      date='11th November 2022'
      heading='Ginger in Nigeria'
      caption={
        'Ginger (Zingiber officcinale Roscoe) belongs to the family Zingiberaceae and is an important commercial crop grown for its aromatic rhizomes.'
      }
      coverImg={cover}
    >
      <div>
        {textParser(blog2.section1)}
        <p>cbi.eu, Ginger value chain in Nigeria, Dec. 2021</p>
        <p style={{ marginTop: '5rem', textAlign: 'center' }}>
          Posted 3rd December 2022 by{' '}
          <a
            href='https://www.blogger.com/profile/00988729807971573805'
            target='_blank'
            rel='noreferrer'
            className={classes.link}
          >
            T54blog
          </a>
        </p>
      </div>
    </BlogContent>
  );
};

export default Blog2;
