import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  managerButton:{
    right:0,
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  const handleGoToLogin = () => {
    history.push("/login");
  };

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <StorefrontIcon />
          </IconButton>
          <Button color="inherit" className={classes.managerButton} onClick={handleGoToLogin}>
            مدیریت
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
