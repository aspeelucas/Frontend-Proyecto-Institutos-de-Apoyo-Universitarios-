import React, { useState } from "react";
import { SideMenu } from "../../components/SideMenu";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  
  Container,
  Button,
  
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { PopMenu } from "../../components/PopMenu";

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="absolute">
        <Toolbar
          sx={{
            pr: "24px",
          }}
        >
          <Button sx={{color:'#FFF'}} onClick={()=>setOpen(true)}>
            <MenuIcon />
          </Button>

          <SideMenu open={open} onClose={()=>setOpen(false)}/>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Pilar  Web
          </Typography>
          <PopMenu/>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
