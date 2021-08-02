import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { useHistory, NavLink } from "react-router-dom";
import { isLoggedIn, logout } from "./../utils/auth";
import { headerStyles } from "../style";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";
import CartModal from "./CartModal";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../assets/pics/online-shop.png";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const Header = () => {
  const history = useHistory();
  const classes = headerStyles();
  const [cartNumber, setCartNumber] = useState(0);
  const cart = useSelector((state) => state.cart.cartProducts);
  const [openModal, setOpenModal] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    setCartNumber(cart?.length);
  }, [cart]);

  const handleGoToLogin = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    logout();
    history.push("/");
    window.location.reload();
  };

  const handleBackToMain = () => {
    history.push("/");
  };

  const handleOpenCartModal = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSearch = () => {
    history.push("/search");
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const menuId = "primary-search-account-menu";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <NavLink to="/adminPanel/products" className="NavLink">
          <Typography variant="h6" className={classes.mobileLink}>
            کالاها
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/adminPanel/available" className="NavLink">
          <Typography variant="h6" className={classes.mobileLink}>
            موجودی و قیمت
          </Typography>
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="/adminPanel/orders" className="NavLink">
          <Typography variant="h6" className={classes.mobileLink}>
            سفارش ها
          </Typography>
        </NavLink>
      </MenuItem>
    </Menu>
  );

  return (
    <div style={{ marginBottom: "50px" }}>
      <AppBar position="fixed" >
        <Toolbar className={classes.root}>
          <div>
            <IconButton
              onClick={handleBackToMain}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="" className={classes.logo} />
              <Typography className={classes.title} variant="h4">
                فروشگاه من
              </Typography>
            </IconButton>
            <IconButton
              onClick={handleSearch}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <SearchIcon />
            </IconButton>
          </div>
          <div className={classes.leftSide}>
            {!isLoggedIn() ? (
              <div className={classes.btnHolder}>
                <IconButton
                  aria-label="cart"
                  className={classes.cartButton}
                  onClick={() => handleOpenCartModal()}
                >
                  <StyledBadge badgeContent={cartNumber} color="secondary">
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
                <Button
                  color="inherit"
                  className={classes.managerButton}
                  onClick={handleGoToLogin}
                >
                  <Typography variant="h6"> مدیریت</Typography>
                </Button>
              </div>
            ) : (
              <Button
                color="inherit"
                className={classes.managerButton}
                onClick={handleLogOut}
              >
                <Typography variant="h6"> خروج از حساب</Typography>
              </Button>
            )}
            {isLoggedIn() && (
              <div className={classes.sectionDesktop}>
                <NavLink to="/adminPanel/products">
                  <Typography variant="h6" className={classes.link}>
                    کالاها
                  </Typography>
                </NavLink>
                <NavLink to="/adminPanel/available">
                  <Typography variant="h6" className={classes.link}>
                    موجودی و قیمت
                  </Typography>
                </NavLink>
                <NavLink to="/adminPanel/orders">
                  <Typography variant="h6" className={classes.link}>
                    سفارش ها
                  </Typography>
                </NavLink>
              </div>
            )}
            {isLoggedIn() && (
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {isLoggedIn() && renderMobileMenu}
      {openModal && (
        <CartModal
          open={openModal}
          handleClose={handleClose}
          cartProducts={cart}
        />
      )}
    </div>
  );
};
export default Header;
