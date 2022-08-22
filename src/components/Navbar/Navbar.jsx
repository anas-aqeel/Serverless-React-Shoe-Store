import * as React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { NavConfig } from "../../siteConfig";
import { CustomIconButton } from "../Buttons/MuiIconButtons";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchField from "../Search/Search";

const Navbar = () => {
  let pages = NavConfig.pages;
  let logoTxt = NavConfig.logo;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <div className="navbar">
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#f3eeee",
          }}
          disableGutters
        >
          <Typography
            className="logo"
            variant="h5"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            {logoTxt[0]}
            <span>{logoTxt[1]}</span>
          </Typography>
          <Box sx={{ display: { xs: "flex", md: "none" }}}>
          <Logo text={logoTxt}/>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "space-between",
              display: { xs: "none", md: "flex" },
            }}
          >
            <Box
              sx={{ display: "flex", flexGrow: 1, justifyContent: "center" }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ px: 2, my: 0, color: "inherit", display: "block" }}
                >
                  <Typography variant="body2" textTransform={"capitalize"}>
                    {page}
                  </Typography>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <SearchField bgColor="#17191cd1" color="inherit" />
              <CustomIconButton>
                <ShoppingCartOutlinedIcon />{" "}
              </CustomIconButton>
            </Box>
          </Box>

          <Box
            sx={{ alignItems: "center", display: { xs: "flex", md: "none" } }}
          >
            <SearchField bgColor="#1416187d" color="inherit" />
            <CustomIconButton>
              {" "}
              <ShoppingCartOutlinedIcon />{" "}
            </CustomIconButton>
            <CustomIconButton onClick={handleOpenNavMenu}>
              {" "}
              <MenuIcon />{" "}
            </CustomIconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography fontStyle={"normal"} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
export const Logo = ({text}) => {
  return (
    <Typography
      className="logo"
      variant="h6"
      sx={{
        mr: 2,
        fontSize: { xs: "20px" },
      }}
    >
      {text[0]}
      <span>{text[1]}</span>
    </Typography>
  )
}
export default Navbar;
