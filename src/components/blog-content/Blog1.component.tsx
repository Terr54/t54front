import React from 'react';
import BlogContent from './BlogContent.component';
import cover from '../../assets/pictures/ginger1.jpg';
import { textParser } from './textParser';
import { blog1 } from '../../assets/data/blogs';
import classes from './BlogContent.module.css';

const Blog1 = () => {
  return (
    <BlogContent
      author='cbi.eu, Ginger value chain in Nigeria'
      date='Dec. 2021'
      heading='Nigeria ginger still gets into the EU despite challenges and is often enters the EU indirectly.'
      caption={
        "When was the last time you had Ginger, perhaps you don't now. Well but, when was the last time you had sausages and other spicy food? It is well possible that you had Nigeria ginger or at least a mix of it. "
      }
      coverImg={cover}
    >
      <div style={{ marginBottom: '20px' }}>
        {textParser(blog1.section1)}
        <h3 style={{ margin: '10px 0 0' }}>
          Summary of Ginger season in Nigeria:
        </h3>
        <div className={classes.summeryList}>
          {blog1.summaryList.map((item, index) => (
            <p key={index} className={classes.listItem}>
              {item.text}
            </p>
          ))}
        </div>
        {textParser(blog1.section2)}
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

export default Blog1;
