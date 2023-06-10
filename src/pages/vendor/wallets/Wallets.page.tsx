import { useState } from 'react';
import { Container } from './../../admin/suppliers/Suppliers.styles';
import { useTranslation } from 'react-i18next';
import HeadingTab from '../../../components/admin/admin-tabs/HeadingTab.component';
import Wrapper from '../../../components/admin/wrapper/Wrapper.component';
import RecentlyAdded from '../../../components/admin/recently-added/RecentlyAdded.component';
import { quotesHeading } from '../../../assets/data/quotesHeading';
import { quotesTabs } from '../../../assets/data/quotesTabs';
import { quotesData } from '../../../assets/data/quotesData';
import classes from '../vendor.module.css';
import Table from '../../../components/commons/table/Table.component';
import { useNavigate } from 'react-router-dom';
import NoItem from '../../../components/no-detail/NoItem.component';
import { path } from '../../../routes/paths';

const Wallets = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('All');
  const [verified, setVerified] = useState<boolean>(false);

  return (
    <Wrapper heading={t('wallets')}>
       <NoItem
          height='50vh'
          infoText='Sorry!, no wallets available for now, stay tuned! 😀😄'
          text='See Products'
          onClick={() => navigate(path.VENDORPRODUCTS)}
        />
      {/* <Container>
        <div className={classes.tabs}>
          <div style={{ display: 'flex' }}>
            {quotesTabs.map((tab) => (
              <HeadingTab
                active={tab.text === activeTab}
                amount={tab.amount ?? ''}
                text={t(tab.text)}
                onClick={() => setActiveTab(tab.text)}
                key={tab.text}
              />
            ))}
          </div>
          <div style={{ display: 'flex' }}>
            <RecentlyAdded />
          </div>
        </div>
        <Table data={quotesData} heading={quotesHeading} path='invoice' />
      </Container> */}
    </Wrapper>
  );
};

export default Wallets;
