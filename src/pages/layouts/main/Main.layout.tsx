import React from 'react';
// Components import
// import Navbar from '../../../components/commons/navbar/Navbar.component'
import Footer from '../../../components/commons/footer/Footer.component';
import classes from './Main.module.css'
import Navbar from '../../../components/commons/navbar/Navbar.component';

interface ChildrenProp {
  children: React.ReactNode;
}

const MainLayout = ({ children }: ChildrenProp) => (
  <div className={classes.container}>
    <Navbar />
    <div className={classes.children}>
    	{children}
    </div>
    <Footer />
  </div>
);

export default MainLayout;
