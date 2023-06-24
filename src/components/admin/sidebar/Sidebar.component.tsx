import React, { useState } from 'react';
import Logo from '../../commons/logo/Logo';
import SidebarItem from '../sidebar-item/SidebarItem.component';
import classes from './Sidebar.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '../../../store';
import { SidebarItemType } from '../../../assets/data/sidebarItems';

interface SidebarProps {
  width?: string;
  sidebarItems?: SidebarItemType[];
}

const Sidebar = ({ width, sidebarItems }: SidebarProps) => {
  const user = useSelector(state => state.user.payload);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('');
  return (
    <div className={classes.container} style={{ width }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Logo width={110} height={30} />
      </div>
      <div style={{ marginTop: '30px' }}>
        {
          user && sidebarItems ? (
            <>
              {
                sidebarItems
                .filter(s => s.roles?.some(r => r?.toLocaleUpperCase() === user.role?.name?.toLocaleUpperCase()))
                .map(item => {
                  return (
                    <SidebarItem
                      active={item.title === active}
                      key={item.id}
                      text={t(item.title)}
                      renderIcon={() => <item.icon />}
                      onClick={() => {
                        setActive(item.title);
                        if (item.to) navigate(item?.to);
                      }}
                    />
                  )
                })
              }
            </>
          ) : null
        }
      </div>
    </div>
  );
};

export default Sidebar;
