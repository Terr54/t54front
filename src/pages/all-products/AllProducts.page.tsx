import MarketplaceNav from '../../components/marketplace-nav/MarketplaceNav.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { Container } from './AllProducts.styles';
import { ServicesContainer } from '../landing/Landing.styles';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import Button from '../../components/commons/controls/button/Button.component';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import PathHeader from '../../components/path-header/PathHeader.component';
import ProductComponent from '../../components/vendor/product/Product.component';
import { stockFilters } from '../../constants';
import { useDispatch, useSelector } from '../../store';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { StockFilterName } from '../../types';
import { Product } from '../../domain/domain';
import { useNavigate } from 'react-router-dom';
import { loadSupplierProductsAction } from '../../store/features/slices/product';
import NoItem from '../../components/no-detail/NoItem.component';
import { path } from '../../routes/paths';

const AllProducts = () => {
  const filters = stockFilters;
  const { t } = useTranslation();

  const productList = useSelector(state => state.products.payload);
  const [activeTab, setActiveTab] = useState<StockFilterName>('all');
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Record<StockFilterName, Product[]> | null>(null);

  const dispatch = useDispatch();

  const effectRef = useRef(false);
  const navigate = useNavigate()

  useEffect(() => {
    if (!effectRef.current) {
      dispatch(loadSupplierProductsAction());
    }
    effectRef.current = true;
  }, []);

  useEffect(() => {
    if (productList?.products) {
      const f: any = {};
      (Object.keys(filters) as StockFilterName[]).forEach(k => {
        f[k] = productList?.products?.filter(p => filters[k].test(productList?.productStocks[p.id]))
      })
      setFilteredProducts(f);
    }
  }, [productList]);
  return (
    <Container>
      <MarketplaceNav />
      <PathHeader path="Home/All Products" />
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading="All Products"
          caption='Discover our assortment of products. These include products from every category of agro produce such as herbs and spices, fruits,  vegetables, nuts, beverages, etc. About 60% of the products here are sourced from Nigeria while the other 40%, from North Africa.'
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="100%"
          headingSize="16px"
          headingLength="50%"
        />
        <HeaderCaption
          heading={`${productList?.products.length} Products available`}
          showCaption={false}
          flexDirection='row'
          textAlign="left"
          color="#000"
          headingSize="5px"
          headingColor='#666666'
          headingLength="100%"
          showHeadingRightContent={() => <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ fontSize: '13px' }}>Sort By: </div><Button bgColor='transparent' color='#E63F07' text='Latest To Oldest' renderIcon={() => <VerticalAlignCenterIcon fontSize='small' style={{ marginRight: '6px' }} />} /></div>}
          headingJustify='space-between'
          headingAlign='center'
          headingFlex='row'
          headingDisplay='flex'
        />
        <ServicesContainer
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3vw'
          }}
        >
          {
            filteredProducts
              ? (
                  filteredProducts?.[activeTab]?.map(
                    (prod) => <ProductComponent key={prod.id} title={prod.name} cover={productList?.mediaSlots?.[prod.id]?.[0]?.src} onClick={() => navigate(`/edit-product/${prod.id}`)} />)
                )
              : <NoItem
                  height='50vh'
                  infoText='Opps! No products found'
                  text='Go Back To Home'
                  onClick={() => navigate(path.VENDOR)}
                />
          }
        </ServicesContainer>
      </SectionWrapper>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button bgColor='transparent' color='#E63F07' text='Go back up' iconAfter renderIcon={() => <ArrowUpwardRoundedIcon />} padding='44px' />
      </div>
    </Container>
  );
};
export default AllProducts;
