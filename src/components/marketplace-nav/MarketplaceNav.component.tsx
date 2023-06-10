import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container, Content, LinkTab, marketplaceNavProps } from './MarketplaceNav.styles';
import { useSelector } from '../../store';

const MarketplaceNav = ({ onSelectionChange, margin = '20px 0 0' }: marketplaceNavProps) => {
  const [activeIndex, setActiveIndex] = useState<string>('');
  const { t } = useTranslation();
  const { payload } = useSelector((state) => state.categories);

  const handleActiveSelectionChange = (id: string) => {
    onSelectionChange?.(id);
    setActiveIndex(id);
  };

  return (
    <Container margin={margin}>
      <Content>
        {[{ id: 'product.all' }, ...(payload ?? [])]?.map((link) => (
          <LinkTab
            key={link.id}
            activeTab={activeIndex === link.id}
            onClick={() => {
              handleActiveSelectionChange(link.id);
            }}
          >
            <Link
              style={{
                textTransform: 'none',
                textDecoration: 'none',
                color: activeIndex === link.id ? 'rgba(83, 23, 3, 1)' : '#333',
                lineHeight: '25px'
              }}
              to="#"
            >
              <span style={{ textTransform: 'capitalize' }}>{t(link.id?.substring('product.'.length)) ?? link.id}</span>
            </Link>
          </LinkTab>
        ))}
      </Content>
    </Container>
  );
};

export default MarketplaceNav;
