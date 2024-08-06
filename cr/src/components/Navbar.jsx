import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "../assets/CrLogo.png";
import { Link } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{ bgcolor: "white", color: "black", height: "70px" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div">
            <Link to="/">
              <img
                src={logo}
                alt="Website Logo"
                style={{ maxHeight: "60px", margin: "15px" }}
              />
            </Link>
          </Typography>
          {!matches && (
            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              <Link
                to="/about"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  color="inherit"
                  sx={{ marginRight: 1, "&:hover": { color: "#77428d" } }}
                >
                  About
                </Button>
              </Link>
              <Link
                to="/contact"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  color="inherit"
                  sx={{ marginRight: 1, "&:hover": { color: "#77428d" } }}
                >
                  Contact
                </Button>
              </Link>
              <Link
                to="/faq"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  color="inherit"
                  sx={{ "&:hover": { color: "#77428d" } }}
                >
                  FAQ
                </Button>
              </Link>
            </Box>
          )}
          {matches && (
            <Box
              sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
            >
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleOpenNavMenu}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ height: "60px", "&:hover": { color: "#432855" } }}
              >
                About Us
              </MenuItem>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ height: "60px", "&:hover": { color: "#432855" } }}
              >
                Contact Us
              </MenuItem>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{ height: "60px", "&:hover": { color: "#432855" } }}
              >
                FAQ
              </MenuItem>
            </Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}
