import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next';
import AddIcon from '@mui/icons-material/Add';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import Button from '../../../components/commons/controls/button/Button.component';
import HeadingTab from '../../../components/admin/admin-tabs/HeadingTab.component';
import RecentlyAdded from '../../../components/admin/recently-added/RecentlyAdded.component';
import ProductComponent from '../../../components/vendor/product/Product.component';
import classes from './Products.module.css';
import { Modal } from '@mui/material';
import { AddNewProduct } from '../../../components/product/AddNewProduct.component';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from '../../../store';
import { loadSupplierProductsAction } from '../../../store/features/slices/product';
import { stockFilters } from '../../../constants';
import { Product } from '../../../domain/domain';
import { StockFilterName } from '../../../types';
import NoItem from '../../../components/no-detail/NoItem.component';
import { path } from '../../../routes/paths';

const Products = () => {
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
  }, [dispatch]);

  useEffect(() => {
    if (productList?.products) {
      const f: any = {};
      (Object.keys(filters) as StockFilterName[]).forEach(k => {
        f[k] = productList?.products?.filter(p => filters[k].test(productList?.productStocks[p.id]))
      })
      setFilteredProducts(f);
    }
  }, [filters, productList]);

  return (
    <Wrapper heading={t('products')} renderButton={() => (
      <Button
        style={{ textAlign: 'left' }}
        bgColor='#E63F07'
        text={t('add-new-product')}
        renderIcon={() => <AddIcon />}
        iconAfter
        width='14%'
        padding='8px'
        onClick={() => setShowModal(true)}
      />
    )}>
      <div className={classes.adminTabs}>
      <div style={{ display: 'flex' }}>
          {(Object.keys(filters) as StockFilterName[]).map((tab) => (
            <HeadingTab
              active={tab === activeTab}
              amount={filteredProducts?.[tab]?.length ?? ''}
              text={t(tab)}
              onClick={() => setActiveTab(tab)}
              key={tab}
            />
          ))}
        </div>
        <RecentlyAdded />
      </div>
      <div className={classes.products}>
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
      </div>
      <Modal open={showModal} onClose={() => setShowModal(false)} >
          <div style={{ margin: 'auto', background: '#fff', width: 400, marginTop: 120, padding: 15, borderRadius: 8 }}>
            <AddNewProduct onDismiss={() => setShowModal(false)} />
          </div>
      </Modal>
    </Wrapper>
  )
}

export default Products;
