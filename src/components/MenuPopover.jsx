import React from "react";
import { 
    Popover
    } from '@mui/material';

const MenuPopover = ({ children, sx, ...other }) => {
  return (
    <Popover
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      
      {...other}
    >
      {children}
    </Popover>
  );
};
export default MenuPopover;
