import MarketplaceNav from '../../components/marketplace-nav/MarketplaceNav.component';
import SectionWrapper from '../../containers/SectionWrapper/SectionWrapper.container';
import { Container } from './TerreBasics.styles';
import ProductItem from '../../components/product-item/ProductItem.component';
import { ServicesContainer } from '../landing/Landing.styles';
import HeaderCaption from '../../components/commons/header-caption/HeaderCaption.component';
import Button from '../../components/commons/controls/button/Button.component';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import VerticalAlignCenterIcon from '@mui/icons-material/VerticalAlignCenter';
import PathHeader from '../../components/path-header/PathHeader.component';
import { products } from '../../assets/data/products';

const TerreBasics = () => {
  return (
    <Container>
      <MarketplaceNav />
      <PathHeader path="Home / Fruits" />
      <SectionWrapper height={100} padding="0px 44px 44px">
        <HeaderCaption
          heading="Fruits"
          caption='Discover our wide range of fruits. These include mangoes, papayas, sour sop, watermelons, avocados, etc. About 60% of the products here are sourcd from Nigeria; prominent for their sweet taste and high shelf life while the other 40% are from North Africa.'
          alignItems="flex-start"
          textAlign="left"
          color="#000"
          captionLength="100%"
          headingSize="16px"
          headingLength="50%"
        />
        <HeaderCaption
          heading="15 Products available"
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
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)'
          }}
        >
          {/* {
            products.map((product) => (
              <ProductItem
                key={product.title}
                bgImage={product.bgImage}
                title={product.title}
                company={product.company}
                country={product.country}
                price={product.price}
                style={{ marginRight: '5px' }}
              />
            ))
          } */}
        </ServicesContainer>
      </SectionWrapper>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Button bgColor='transparent' color='#E63F07' text='Go back up' iconAfter renderIcon={() => <ArrowUpwardRoundedIcon />} padding='44px' />
      </div>
    </Container>
  );
};
export default TerreBasics;
