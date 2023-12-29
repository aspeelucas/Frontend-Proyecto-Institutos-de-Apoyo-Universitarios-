import React,{ useRef,useState } from "react";
import { Link as RouterLink} from "react-router-dom";
import { Box, IconButton,MenuItem as MenuItemMui } from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import MenuPopover from "./MenuPopover";
import { popMenu } from "../constants/popMenu";


export const PopMenu = () => {
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);
  
  return (
    <Box>
      <IconButton
        size="small"
        sx={{ ml: 2 }}
        onClick={() => setOpen(true)}
        ref={menuRef}
      >
      </IconButton>
      <MenuPopover
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={menuRef.current}
        sx={{
          marginTop: 2.5,
          marginLeft: 0.5,
          overflow: "inherit",
          boxShadow: "1px, 1px, 2px, 2px rgb(0 0 0 / 20%)",
          width: 320,
        }}
      >
        {popMenu.map((item) => (
          <MenuItemMui
            key={item.title}
            to={item.path}
            component={RouterLink}
            onClick={() => setOpen(false)}
            sx={{ py: 1, px: 2.5 }}
          >
            <ListItemText disableTypography>{item.title}</ListItemText>
          </MenuItemMui>
        ))}
      </MenuPopover>
    </Box>
  );
};
