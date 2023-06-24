import React from 'react';
import BlogContent from './BlogContent.component';
import cover from '../../assets/pictures/egussi_2.jpg';
import egussi from '../../assets/pictures/egussi_1.jpg';
import { textParser } from './textParser';
import { blog3 } from '../../assets/data/blogs';
import classes from './BlogContent.module.css';
import { Image } from './BlogContent.styles';

const Blog3 = () => {
  return (
    <BlogContent
      author='T54blog'
      heading='Eating Egusi'
      caption={
        'Buying African is simply buying something that originates from Africa or is made by an African.'
      }
      coverImg={cover}
      date='22nd June 2020'
    >
      <div>
        <p>Today we look at eating Egusi. </p>
        <Image style={{ height: '200px', width: '20vw' }}>
          <img src={egussi} alt='farming' />
        </Image>
        {textParser(blog3.section1)}
        <div className={classes.summeryList}>
          {blog3.detailList.map((item, index) => (
            <p key={item.id} className={classes.listItem}>
              {item.text}
            </p>
          ))}
        </div>
        <h3 style={{ margin: '16px 0 6px' }}>Ingredients</h3>
        <div className={classes.summeryList}>
          {blog3.ingredientsList.map((item, index) => (
            <ul key={item.id} className={classes.listItem}>
              <li>{item.text}</li>
            </ul>
          ))}
        </div>
        <h3 style={{ margin: '16px 0 6px' }}>Instructions</h3>
        <div className={classes.summeryList}>
          {blog3.instructionsList.map((item, index) => (
            <ol key={item.id} className={classes.listItem}>
              <li>{item.text}</li>
            </ol>
          ))}
        </div>
        <p>How to Cook Video:</p>
        <a
          href='https://www.blogger.com/onboarding'
          rel='noreferrer'
          target='_blank'
          className={classes.link}
        >
          Video
        </a>
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

export default Blog3;
