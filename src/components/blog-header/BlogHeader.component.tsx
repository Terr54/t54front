import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { blogNavLinks } from '../../routes/links';
import { Container, LinkTab } from './BlogHeader.styles';
import Search from '../commons/search/Search.component';
import classes from './BlockHeader.module.css';

const BlogHeader = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setActiveIndex(blogNavLinks.findIndex((l) => l.url === location.pathname));
  }, [location]);

  return (
    <div className={classes.main}>
      <Container>
        <div
          style={{
            maxWidth: '100%',
            display: 'flex',
            overflowX: 'scroll',
            boxSizing: 'border-box'
          }}
        >
          {blogNavLinks.map((link) => (
            <LinkTab
              key={link.id}
              activeTab={activeIndex === link.id}
              onClick={() => {
                setActiveIndex(link.id);
              }}
            >
              <Link
                style={{
                  textTransform: 'none',
                  textDecoration: 'none',
                  color: activeIndex === link.id ? '#33f' : '#333',
                }}
                to={link.url}
              >
                {t(link.label)}
              </Link>
            </LinkTab>
          ))}
        </div>
        <div className={classes.search}>
          <Search
            placeholder={t('search-products')}
            renderIcon={() => (
              <SearchIcon style={{ color: '#D1D1D1', fontSize: '15px' }} />
            )}
          />
        </div>
      </Container>
      <div className={classes.searchMobile}>
        <Search
          placeholder={t('search-products')}
          renderIcon={() => (
            <SearchIcon style={{ color: '#D1D1D1', fontSize: '15px' }} />
          )}
        />
      </div>
    </div>
  );
};

export default BlogHeader;
