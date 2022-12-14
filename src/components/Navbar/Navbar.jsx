import React, { useContext } from "react";
import {
  Box,
  Toolbar,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from "@mui/material";
import { MuiRouteLink } from "../Buttons/MuiIconButtons";
import "./navbar.css";
import { NavConfig } from "../../siteConfig";
import { CustomIconButton } from "../Buttons/MuiIconButtons";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchField from "../Search/Search";
import Badge from "@mui/material/Badge";
import { MY_CONTEXT } from "../../context/GlobalContext";

const Navbar = () => {
  let {
    state: { cart },
  } = useContext(MY_CONTEXT);
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
            sx={{
              mr: 2,
              textDecoration: "none",
              display: { xs: "none", md: "flex" },
            }}
          >
            <MuiRouteLink route={""} color="white">
              <Logo text={logoTxt} />
            </MuiRouteLink>
          </Typography>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <MuiRouteLink route={""} color="white">
              <Logo text={logoTxt} />
            </MuiRouteLink>
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
                <MuiRouteLink route={page} color="white">
                  <Button
                    key={page}
                    sx={{
                      px: 2,
                      my: 0,
                      color: "white",
                      textDecoration: "none",
                      display: "block",
                    }}
                  >
                    <Typography variant="body2" textTransform={"capitalize"}>
                      {page}
                    </Typography>
                  </Button>
                </MuiRouteLink>
              ))}
            </Box>
            <Box sx={{ display: "flex" }}>
              <SearchField bgColor="#17191cd1" color="inherit" />
              <MuiRouteLink route={"cart"} color="white">
                <CustomIconButton>
                  <Badge badgeContent={cart.length} color="error">
                    <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                  </Badge>
                </CustomIconButton>
              </MuiRouteLink>
            </Box>
          </Box>

          <Box
            sx={{ alignItems: "center", display: { xs: "flex", md: "none" } }}
          >
            <SearchField bgColor="#1416187d" color="inherit" />
            <MuiRouteLink route={"cart"} color="white">
              <CustomIconButton>
                <Badge badgeContent={cart.length} color="error">
                  <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
                </Badge>
              </CustomIconButton>
            </MuiRouteLink>

            <CustomIconButton onClick={handleOpenNavMenu}>
              <MenuIcon />
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
                <MuiRouteLink route={page} color="black">
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography fontStyle={"normal"} textAlign="center">
                      {page}
                    </Typography>
                  </MenuItem>
                </MuiRouteLink>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </div>
  );
};
export const Logo = ({ text }) => {
  return (
    <Typography
      className="logo"
      variant="h6"
      sx={{
        mr: 2,
        fontSize: { xs: "25px" },
      }}
    >
      {text[0]}
      <span>{text[1]}</span>
    </Typography>
  );
};
export default Navbar;
