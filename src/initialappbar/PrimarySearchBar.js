import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import ToggleSwitch from "./ToggleSwitch";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import userpic from "./userpic.jpg";
import userpictwo from "./userpictwo.jpg";
import userpicthree from "./userpicthree.jpg";
import { makeStyles } from "@mui/styles";
import "./csscheck.css";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  // '&:hover': {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  // [theme.breakpoints.up('sm')]: {
  //   marginLeft: theme.spacing(3),
  //   width: 'auto',
  // },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const useStyles = makeStyles({
  displayFlexJustifyContentCenter: {
    display: "flex",
    justifyContent: "center",
  },
  notificationIcon: { color: "#bbb", transform: "rotate(10deg)" },
  avtarIcon: {
    marginRight: "1.5rem",
  },
  iconButton: {
    mr: 2,
    color: "#bbb",
  },
  toolBarBackgroundColor: {
    backgroundColor: "#fff",
  },
  companyLogo: {
    color: "#252424",
    marginRight: "0.5rem",
    fontWeight: "800",
  },
});

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.displayFlexJustifyContentCenter}>
        <Box>
          <ToggleSwitch />
        </Box>
      </MenuItem>

      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsNoneOutlinedIcon
              // sx={{ color: "#bbb", transform: "rotate(10deg)" }}
              className={classes.notificationIcon}
            />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <Avatar
          // sx={{ marginRight: "1.5rem" }}
          className={classes.avtarIcon}
          alt="Travis Howard"
          src={userpictwo}
        />
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className={classes.toolBarBackgroundColor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            // sx={{
            //   mr: 2,
            //   color: "#bbb",
            //   display: {
            //     md: "none",
            //   },
            // }}
            sx={{
              display: {
                md: "none",
              },
            }}
            className={classes.iconButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            // sx={{
            //   display: { xs: "none", sm: "block" },
            //   color: "#252424",
            //   marginRight: "0.5rem",
            //   fontWeight: "800",
            // }}
            className={classes.companyLogo}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Company LOGO
          </Typography>
          <Search
            sx={{
              borderRadius: "1.7rem",
              backgroundColor: "#f5f5f5",
              display: { md: "none" },
              height: "2rem",
            }}
          >
            <SearchIconWrapper
              sx={{
                backgroundColor: "#1976D2",
                borderRadius: "1.7rem",
                left: { xs: "80%", sm: "86%" },
              }}
            >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              sx={{ top: "-0.2rem", color: "#747070", left: "-2rem" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, width: "50%" }}>
            <Search
              sx={{
                borderRadius: "1.7rem",
                backgroundColor: "#f5f5f5",
                width: { md: "60%", lg: "47%" },
                height: "2rem",
                marginTop: "0.4rem",
                marginRight: "2.7rem",
              }}
            >
              <SearchIconWrapper
                sx={{
                  backgroundColor: "#1976D2",
                  borderRadius: "1.7rem",
                  left: { xs: "87%", lg: "90%" },
                }}
              >
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{ top: "-0.2rem", color: "#747070", left: "-2rem" }}
              />
            </Search>
            <Box>
              <ToggleSwitch />
            </Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              sx={{ marginRight: "1.5rem" }}
            >
              <Badge badgeContent={17} color="primary">
                <NotificationsNoneOutlinedIcon
                  sx={{ color: "#bbb", transform: "rotate(10deg)" }}
                />
              </Badge>
            </IconButton>
            <Avatar
              alt="girl image"
              src={userpictwo}
              sx={{
                marginRight: "1rem",
                cursor: "pointer",
                objectFit: "cover",
              }}
              onClick={handleProfileMenuOpen}
            />
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{
                display: { xs: "none", lg: "block" },
                color: "#252424",
                marginTop: "0.5rem",
              }}
            >
              User Name
            </Typography>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ color: "#bbb" }}
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
