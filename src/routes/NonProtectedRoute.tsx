import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import React from 'react';
import Header from 'layouts/Header';
import Nav from 'layouts/Nav';

const NonProtectedRoute = () => {
  return (
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

export default NonProtectedRoute;
