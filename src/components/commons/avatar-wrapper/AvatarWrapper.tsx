import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { path } from '../../../routes/paths';
import { useDispatch } from '../../../store';
import { logout } from '../../../store/features/slices/user';
import './AvatarWrapper.css';
import Button from '../controls/button/Button.component';

// const [activeIndex, setActiveIndex] = useState<number>(0)

const DropDownProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate(path.LANDING);
  };
  return (
    <div className='dropDownProfile'>
      <Button
        text='Dashboard'
        color='#e63f07'
        width='100%'
        padding='10px 4px'
        bgColor='#fff'
        onClick={() => navigate(path.VENDOR)}
        margin='0 0 5px'
        renderIcon={() => <DashboardIcon fontSize='small' style={{ color: '#e63f07', position: 'relative', right: '8px' }}/>}
      />
      {/* <Button
        text='Settings'
        color='#e63f07'
        width='100%'
        padding='10px 4px'
        bgColor='#fff'
        onClick={() => navigate(path.VENDOR)}
        margin='0 0 8px'
      /> */}
      {/* <hr style={{ opacity: 0.3 }} /> */}
      <Button
        text='Logout'
        color='#e63f07'
        width='100%'
        padding='10px 4px'
        bgColor='#fff'
        onClick={handleLogout}
        renderIcon={() => <LogoutIcon fontSize='small' style={{ color: '#e63f07', position: 'relative', right: '18px' }} />}
      />
    </div>
  );
};

export default DropDownProfile;
