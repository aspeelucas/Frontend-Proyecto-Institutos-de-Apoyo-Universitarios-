import React  from "react";
import MenuItem from "./MenuItem";
import { Box, Button, List } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ items, onClose }) => {
  return (
    <List>
      <Box sx={{width:'100%',display: "flex",
            alignItems: "center",
            justifyContent: "end",
            mt:3}}>

        <Button
          sx={{
            color: "#FFF",
            fontSize: 20,
            
          }}
          onClick={onClose}
        >
          <CloseIcon sx={{
            fontSize: 30,
          }} />
        </Button>
      </Box>

      {items.map((item) => (
        <MenuItem item={item} key={item.title} />
      ))}
    </List>
  );
};

export default Menu;
