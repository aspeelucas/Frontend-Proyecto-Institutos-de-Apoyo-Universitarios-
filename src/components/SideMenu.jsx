import React, { useEffect } from "react";
import DrawerMenu from "../constants/DrawerMenu";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import { 
  Box,
  Drawer,
  } from '@mui/material';
export const SideMenu = ({ open, onClose }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (open) {
      onClose();
    }
  }, [pathname]);

  const drawerWidth = 240;

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        open={open}
        onClose={onClose}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Menu items={DrawerMenu} onClose={onClose} />
      </Drawer>
    </Box>
  );
};
