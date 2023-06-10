import React, { useState } from 'react';
import Logo from '../../commons/logo/Logo';
import SidebarItem from '../sidebar-item/SidebarItem.component';
import classes from './Sidebar.module.css';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

interface sidebarProps {
  width?: string;
  sidebarItems?: any;
}

const Sidebar = ({ width, sidebarItems }: sidebarProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [active, setActive] = useState<string>('');
  const [drop, setDrop] = useState<boolean>(false);
  return (
    <div className={classes.container} style={{ width }}>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Logo width={110} height={30} />
      </div>
      <div style={{ marginTop: '30px' }}>
        {sidebarItems
          .filter((item: any, idx: any) => idx === 0)
          .map((item: any) => (
            <SidebarItem
              active={item.title === active}
              key={item.id}
              text={t(item.title)}
              renderIcon={() => <item.icon />}
              onClick={() => {
                setActive(item.title);
                navigate(item?.to);
              }}
            />
          ))}
        {sidebarItems
          .filter((item: any, idx: any) => idx === 1)
          .map((item: any) => (
            <SidebarItem
              active={item.title === active}
              key={item.id}
              text={t(item.title)}
              renderIcon={() => <item.icon />}
              onClick={() => {
                setActive(item.title);
                setDrop(!drop);
              }}
            />
          ))}
        {drop &&
          sidebarItems
            .filter((item: any, idx: any) => idx > 1 && idx < 4)
            .map((item: any) => (
              <SidebarItem
                active={item.title === active}
                key={item.id}
                text={t(item.title)}
                renderIcon={() => <item.icon />}
                onClick={() => {
                  setActive(item.title);
                  setDrop(true);
                  navigate(item?.to)
                }}
                style={{ paddingLeft: '30px' }}
              />
            ))}
        {sidebarItems
          .filter((item: any, idx: any) => idx > 3)
          .map((item: any) => (
            <SidebarItem
              active={item.title === active}
              key={item.id}
              text={t(item.title)}
              renderIcon={() => <item.icon />}
              onClick={() => {
                setActive(item.title);
                navigate(item?.to);
              }}
            />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
