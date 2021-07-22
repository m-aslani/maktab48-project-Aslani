import React,{useState,useEffect} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useHistory, NavLink } from "react-router-dom";
import { isLoggedIn, logout } from "./../utils/auth";
import { headerStyles } from "../style";
import SideBar from "./SideBar";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import CartModal from "./CartModal";

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
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [cartNumber, setCartNumber] = useState(0);
  const cart = useSelector((state)=>state.cart.cartProducts);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setCartNumber(cart.length);
  }, [cart])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const handleOpenCartModal=()=>{
    setOpenModal(true);
  }

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            onClick={handleDrawerToggle}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            onClick={handleBackToMain}
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <StorefrontIcon />
            <Typography className={classes.title} variant="h4">
              فروشگاه من
            </Typography>
          </IconButton>
          {!isLoggedIn() ? (
            <div className={classes.btnHolder}>
              <IconButton aria-label="cart" className={classes.cartButton} onClick={()=>handleOpenCartModal()}>
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
          <div className={classes.linkContainer}>
            {isLoggedIn() && (
              <NavLink to="/adminPanel/products">
                <Typography variant="h6" className={classes.link}>
                  کالاها
                </Typography>
              </NavLink>
            )}
            {isLoggedIn() && (
              <NavLink to="/adminPanel/available">
                <Typography variant="h6" className={classes.link}>
                  موجودی و قیمت
                </Typography>
              </NavLink>
            )}
            {isLoggedIn() && (
              <NavLink to="/adminPanel/orders">
                <Typography variant="h6" className={classes.link}>
                  سفارش ها
                </Typography>
              </NavLink>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {/* <SideBar/> */}
      {openModal &&
      <CartModal open={openModal} handleClose={handleClose} cartProducts={cart}/>
      }
    </div>
  );
};
export default Header;
