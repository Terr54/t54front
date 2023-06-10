import React, { useEffect, useRef, useState } from 'react'
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import Button from '../../components/commons/controls/button/Button.component'
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component'
import SupplierCard from '../../components/supplier-card/SupplierCard.component'
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import MarketplaceNav from '../../components/marketplace-nav/MarketplaceNav.component';
import PathHeader from '../../components/path-header/PathHeader.component';
import { Container } from './Suppliers.styles';
import { suppliers } from '../../assets/data/suppliers';
import BackToTop from '../../components/commons/back-to-top/BackToTop.component';
import { useDispatch, useSelector } from '../../store';
import { loadSuppliersAction } from '../../store/features/slices/supplier';
import { useTranslation } from 'react-i18next';

const Suppliers = () => {
  const suppliersState = useSelector((state) => state.supplier.payload);
  console.log('supplier State', suppliersState)
  const [page, setPage] = useState(0);
  const { t } = useTranslation()

  const effectRef = useRef(true);
  const dispatch = useDispatch()
  useEffect(() => {
    if (!effectRef?.current) {
      dispatch(loadSuppliersAction({ pageNumber: page, pageSize: 100 }));
      effectRef.current = true;
    } else {
      effectRef.current = false;
    }
  }, []);
  return (
    <Container>
      <MarketplaceNav />
      <PathHeader path="Home / Suppliers" />
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading={t('suppliers-word')}
          caption={t('suppliers-caption')}
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="100%"
          headingSize="16px"
          headingLength="50%"
        />
        <HeaderCaption
          heading={`${suppliersState?.accepted?.content.length ?? 0} Sellers available`}
          showCaption={false}
          flexDirection='row'
          textAlign="left"
          color="#000"
          headingSize="7px"
          headingColor='#666666'
          headingLength="100%"
          showHeadingRightContent={() => <div style={{ display: 'flex', alignItems: 'center' }}><div style={{ fontSize: '13px' }}>Sort By: </div><Button boxShadow='none' bgColor='transparent' color='#E63F07' text={t('latest-to-oldest')} renderIcon={() => <VerticalAlignCenterIcon fontSize='small' style={{ marginRight: '6px' }} />} /></div>}
          headingJustify='space-between'
          headingAlign='center'
          headingFlex='row'
          headingDisplay='flex'
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)'
          }}
        >
          {
            suppliersState?.accepted?.content?.map((sup) => (
              <SupplierCard
                key={sup.supplierProfile?.id}
                title={sup?.supplierProfile?.merchantName}
                supplierLogo={sup.profile?.picture}
              />
            ))
          }
        </div>
        </SectionWrapper>
       <BackToTop />
    </Container>
  )
}

export default Suppliers;
