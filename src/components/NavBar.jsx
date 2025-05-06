import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  Menu,
  MenuItem,
  Switch,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import { ColorModeContext } from "./Theme"

function NavBar() {
  const { toggleColorMode } = useContext(ColorModeContext);

  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(null);

  const handleMenuOpen = (e) => {
    setOpen(e.currentTarget);
  };

  const handleMenuClose = () => {
    setOpen(null);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Exchange Rates (Live)", path: "/exchange-rates" },
    { label: "About", path: "/about" },
    { label: "Error Page", path: "/error-page" },
  ];

  const activeStyle = {
    backgroundColor: '#72aefc',
    color: '#ffff',
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar sx={{ justifyContent: "space-between" }}>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={handleMenuOpen}>
                <MenuIcon />
              </IconButton>
              <Drawer
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleMenuClose}
              >
                {menuItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    component={Link}
                    to={item.path}
                    onClick={handleMenuClose}
                    selected={location.pathname === item.path}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Drawer>
              <Typography variant="h6" component="div">
                Loan Calculator
              </Typography>
              <Switch
                  onClick={toggleColorMode}
              />
            </>
          ) : (
            <>
              <Typography variant="h6" component="div">
                Loan Calculator
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    color="inherit"
                    variant={location.pathname === item.path ? 'contained' : 'text'}
                    sx={location.pathname === item.path ? activeStyle : undefined}
                  >
                    {item.label}
                  </Button>
                ))}
                <Switch
                   onClick={toggleColorMode}
                />
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;
