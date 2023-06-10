import React from 'react';
import Sidebar from '../../../components/vendor/sidebar/Sidebar.component';
import VendorNavbar from '../../../components/commons/navbar/VendorNavbar.component';
import { vendorSidebarItems } from '../../../assets/data/sidebarItems';

interface ChildrenProp {
  children: React.ReactNode;
}

const VendorLayout = ({ children }: ChildrenProp) => (
  <div style={{ display: 'flex' }}>
    <Sidebar width="14vw" sidebarItems={vendorSidebarItems} />
    <div
      style={{ paddingLeft: '14vw', width: '100%', boxSizing: 'border-box' }}
    >
      <VendorNavbar
        showCartIcon={false}
        showLogo={false}
        showProfile={false}
        logoItemsWidth="14%"
        width=""
      />
      <div
        style={{ padding: '16px', background: '#F9FAFA', minHeight: '100vh', marginTop: '10vh' }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default VendorLayout;
