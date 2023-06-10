import { useEffect, useRef, useState } from 'react';
import MarketplaceNav from '../../components/marketplace-nav/MarketplaceNav.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { Container, Products } from './HerbsAndSpices.styles';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import Button from '../../components/commons/controls/button/Button.component';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import PathHeader from '../../components/path-header/PathHeader.component';
import { useNavigate } from 'react-router-dom';
import { Product, ProductListResponse } from '../../domain/domain';
import { getAllAvailbleProducts } from '../../api/common';
import ProductComponent from '../../components/vendor/product/Product.component';
import { useTranslation } from 'react-i18next';
import { categoryFilter } from '../../constants';

const HerbsAndSpices = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [productList, setProductList] = useState<ProductListResponse>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>();
  const [category, setCategory] = useState('product.all');
  const effectRef = useRef(false);

  useEffect(() => {
    if (!effectRef.current) {
      getAllAvailbleProducts().then(res => {
        setProductList(res.data.content);
        setFilteredProducts(res.data?.content?.products);
      })
    }
    effectRef.current = true;
  }, []);

  useEffect(() => {
    setFilteredProducts(productList?.products?.filter(p => categoryFilter.test(p, category)) ?? [])
  }, [category]);

  return (
    <Container>
      <MarketplaceNav onSelectionChange={(id) => setCategory(id ?? 'product.all')} />
      <PathHeader path="Home / Herbs & Spices" />
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading={t(category.substring('product.'.length))}
          caption={`${t(`${category.substring('product.'.length)}-heading`)}`}
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="100%"
          headingSize="16px"
          headingLength="50%"
          headingStyle={{ textTransform: 'capitalize' }}
        />
        <HeaderCaption
          heading={`${(filteredProducts?.length ?? 0)} ${t('products-available')}`}
          showCaption={false}
          flexDirection='row'
          textAlign="left"
          color="#000"
          headingSize="8px"
          headingColor='#666666'
          headingLength="100%"
          showHeadingRightContent={() => <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ fontSize: '13px' }}>{t('sort-by')}: </div><Button bgColor='transparent' color='#E63F07' text={t('latest-to-old')} renderIcon={() => <VerticalAlignCenterIcon fontSize='small' style={{ marginRight: '6px' }} />} /></div>}
          headingJustify='space-between'
          headingAlign='center'
          headingFlex='row'
          headingDisplay='flex'
        />
      <Products>
          {
            filteredProducts?.map(
              (prod) => <ProductComponent key={prod.id} title={prod.name} cover={productList?.mediaSlots?.[prod.id]?.[0]?.src} onClick={() => navigate(`/edit-product/${prod.id}`)} />)
          }
      </Products>
      </SectionWrapper>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button bgColor='transparent' color='#E63F07' text={t('back-to-top')} iconAfter renderIcon={() => <ArrowUpwardRoundedIcon />} padding='44px' />
      </div>
    </Container>
  );
};
export default HerbsAndSpices;
