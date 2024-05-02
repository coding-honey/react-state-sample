import React from 'react';
import { Box, Drawer, List, ListItemButton, ListItemText, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { G_MENU } from 'constants/constant';

const drawerWidth = 150;
export const navLinkStyle = { textDecoration: 'none' };

export default function Nav() {
  const menuList = [
    { path: G_MENU.noState1.url, name: G_MENU.noState1.name },
    { path: G_MENU.noState2.url, name: G_MENU.noState2.name },
    { path: G_MENU.useState.url, name: G_MENU.useState.name },
    { path: G_MENU.useStateObject.url, name: G_MENU.useStateObject.name },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box>
        <List>
          {menuList.map((menu, index) => (
            <NavLink
              key={menu.name}
              to={menu.path}
              style={({ isActive }) => ({
                ...navLinkStyle,
                color: isActive ? 'blue' : 'inherit',
              })}
            >
              <ListItemButton>
                <ListItemText primary={menu.name} />
              </ListItemButton>
            </NavLink>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
