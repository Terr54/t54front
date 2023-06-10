import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { blogNavLinks } from '../../routes/links';
import { Container, LinkTab } from './BlogHeader.styles';
import Search from '../commons/search/Search.component';

const BlogHeader = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setActiveIndex(blogNavLinks.findIndex(l => l.url === location.pathname));
  }, [location]);

  return (
    <Container>
      <div style={{ width: '100%' }}>
        {blogNavLinks.map((link) => (
            <LinkTab
              key={link.id}
              activeTab={activeIndex === link.id}
              onClick={() => {
                setActiveIndex(link.id);
              }}
            >
            <Link style={{ textTransform: 'none', textDecoration: 'none', color: activeIndex === link.id ? '#33f' : '#333' }} to={link.url}>
                {t(link.label)}
            </Link>
            </LinkTab>
        ))}
      </div>
      <Search placeholder={t('search-products')} renderIcon={() => <SearchIcon style={{ color: '#D1D1D1', fontSize: '15px' }} />} />
    </Container>
  )
}

export default BlogHeader
