import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { useHistory, NavLink } from "react-router-dom";
import { isLoggedIn , logout } from "./../utils/auth";
import {headerStyles} from "../style"


const Header = () => {
  const history = useHistory();
  const classes = headerStyles();

  console.log(isLoggedIn());

  const handleGoToLogin = () => {
      history.push("/login");
  };

  const handleLogOut = ()=>{
    logout();
    history.push("/");
    window.location.reload();
  }

  const handleBackToMain = ()=>{
    history.push("/");
  }

  return (
    <div>
      <AppBar position="relative" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton onClick={handleBackToMain} edge="start" color="inherit" aria-label="menu">
            <StorefrontIcon />
            <Typography className={classes.title} variant="h4">فروشگاه من</Typography>
          </IconButton>
          {!isLoggedIn()?
            <Button
            color="inherit"
            className={classes.managerButton}
            onClick={ handleGoToLogin}
          >
            <Typography variant="h6"> مدیریت</Typography>
          </Button>
          : <Button
          color="inherit"
          className={classes.managerButton}
          onClick={ handleLogOut}
        >
          <Typography variant="h6"> خروج از حساب</Typography>
        </Button>}
        <div className={classes.linkContainer}>
        {
          isLoggedIn() && (
            <NavLink to="/adminPanel/products">
              <Typography variant="h6" className={classes.link}>
              کالاها
              </Typography>
            </NavLink>
          )
        }
        {
          isLoggedIn() && (
            <NavLink to="/adminPanel/available">
              <Typography variant="h6" className={classes.link}>
              موجودی و قیمت
              </Typography>
            </NavLink>
          )
        }
        {
          isLoggedIn() && (
            <NavLink to="/adminPanel/orders">
              <Typography variant="h6" className={classes.link}>
              سفارش ها
              </Typography>
            </NavLink>
          )
        }
        </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
