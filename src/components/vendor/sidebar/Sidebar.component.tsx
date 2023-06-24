import { useEffect, useRef, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Logo from '../../commons/logo/Logo';
import SidebarItem from '../../admin/sidebar-item/SidebarItem.component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { path } from '../../../routes/paths';
import Avatar from '../../commons/avatar/Avatar.component';
import Button from '../../commons/controls/button/Button.component';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from '../../../store';
import { logout } from '../../../store/features/slices/user';
import classes from './Sidebar.module.css';
import { SidebarItemType } from '../../../assets/data/sidebarItems';

interface SidebarProps {
  width?: string;
  sidebarItems?: SidebarItemType[];
}

const Sidebar = ({ width, sidebarItems }: SidebarProps) => {
  const user = useSelector(state => state.user.payload);
  const [active, setActive] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();
  const effectRef = useRef(true);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(location.pathname)
    if (effectRef.current) {
      effectRef.current = false;
      setActive(location.pathname);
    }
  }, [location.pathname])

  const handleLogout = () => {
    dispatch(logout());
    navigate(path.LANDING);
  };

  return (
    <div className={classes.container} style={{ width }}>
      <Link to={path.LANDING}>
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <Logo width={110} height={30} />
        </div>
      </Link>
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
      <div className={classes.bottomSection}>
        <div
          className={classes.avatar}
          onClick={() => navigate(path.MYACCOUNT)}
        >
          <Avatar size="22px" style={{ marginRight: '12px' }} />
          <span className={classes.text}>My Account</span>
        </div>
        <div className={classes.text}>
          <Button
            text="Contact"
            color="#000000"
            renderIcon={() => (
              <LocalPhoneIcon
                fontSize="small"
                style={{ color: '#000000', marginRight: '10px' }}
              />
            )}
            bgColor="transparent"
            style={{ justifyContent: 'flex-start', paddingLeft: '0' }}
            onClick={() => navigate(path.CONTACT)}
          />
        </div>
        <Button
          className="text"
          text="Help"
          color="#000000"
          renderIcon={() => (
            <HelpOutlineIcon
              fontSize="small"
              style={{ color: '#000000', marginRight: '10px' }}
            />
          )}
          bgColor="transparent"
          style={{ justifyContent: 'flex-start', paddingLeft: '0' }}
        />
        <Button
          className="text"
          text="Back To Home"
          color="#000000"
          renderIcon={() => (
            <ArrowBackIcon
              fontSize="small"
              style={{ color: '#000000', marginRight: '10px' }}
            />
          )}
          bgColor="transparent"
          style={{ justifyContent: 'flex-start', paddingLeft: '0' }}
          onClick={() => navigate(path.LANDING)}
        />
        <Button
          text="Logout"
          onClick={handleLogout}
          color="#F52F2F"
          renderIcon={() => (
            <LogoutOutlinedIcon
              fontSize="small"
              style={{ color: '#F52F2F', marginRight: '10px' }}
            />
          )}
          bgColor="transparent"
          style={{ justifyContent: 'flex-start', paddingLeft: '0' }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
