import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from 'components/AuthProvider';
import { G_MENU } from 'constants/constant';
import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Header from 'layouts/Header';
import Nav from 'layouts/Nav';

const ProtectedRoute = () => {
  const { token } = useAuth();

  // Check if the user is authenticated
  return !token ? (
    <Navigate to={G_MENU.login.url} />
  ) : (
    // return (
    <Box>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Nav />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default ProtectedRoute;
