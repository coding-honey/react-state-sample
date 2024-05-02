import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { G_MENU } from 'constants/constant';
import { useAuth } from 'components/AuthProvider';

export default function Header() {
  const { token } = useAuth();
  return (
    <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {token ? <NavLink to={G_MENU.logout.url}>로그아웃</NavLink> : <NavLink to={G_MENU.login.url}>로그인</NavLink>}
      </Toolbar>
    </AppBar>
  );
}
