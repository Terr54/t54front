import React from 'react';
import Navbar from '../../../components/commons/navbar/Navbar.component';
import { sidebarItems } from '../../../assets/data/sidebarItems';
import Sidebar from '../../../components/vendor/sidebar/Sidebar.component';

interface ChildrenProp {
  children: React.ReactNode;
}

const GenaralLayout = ({ children }: ChildrenProp) => (
  <div style={{ display: 'flex' }}>
    <Sidebar width='14vw' sidebarItems={sidebarItems} />
    <div
      style={{ paddingLeft: '14vw', width: '100%', boxSizing: 'border-box' }}
    >
      <Navbar
        showCartIcon={false}
        showLogo={false}
        showProfile={false}
        logoItemsWidth='14%'
        width=''
      />
      <div
        style={{ padding: '16px', background: '#F9FAFA', minHeight: '100vh', boxSizing: 'border-box', marginTop: '10vh' }}
      >
        {children}
      </div>
    </div>
  </div>
);

export default GenaralLayout;
