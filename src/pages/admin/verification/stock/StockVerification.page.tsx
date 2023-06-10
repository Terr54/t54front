import { Table } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { quotesTabs } from '../../../../assets/data/quotesTabs';
import HeadingTab from '../../../../components/admin/admin-tabs/HeadingTab.component';
import RecentlyAdded from '../../../../components/admin/recently-added/RecentlyAdded.component';
import Wrapper from '../../../../components/admin/wrapper/Wrapper.component';
import { Container } from '../../../suppliers/Suppliers.styles';
import classes from '../../admin.module.css';

export const StockVerificatoinPage = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [stockPendingVerification, setStockPendingVerificaton] = useState();

  return (
      <Wrapper heading="Invoices">
        <Container>
          <div className={classes.adminTabs}>
            <div style={{ display: 'flex' }}>
              {quotesTabs.map((tab) => (
                <HeadingTab
                  active={tab.text === activeTab}
                  amount={tab.amount ?? ''}
                  text={tab.text}
                  onClick={() => setActiveTab(tab.text)}
                  key={tab.text}
                />
              ))}
            </div>
            <div style={{ display: 'flex' }}>
              <RecentlyAdded />
            </div>
          </div>

        </Container>
      </Wrapper>
  );
};
