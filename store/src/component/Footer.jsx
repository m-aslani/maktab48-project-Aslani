import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useFooterStyle } from "../style/footer";
import facebook from "../assets/pics/facebook.png";
import instaram from "../assets/pics/instagram.png";
import twitter from "../assets/pics/twitter.png";


const Footer = () => {
    const classes = useFooterStyle();
  return (
    <div>
      <AppBar position="relative" className={classes.root} >
        <Container maxWidth="md">
          <Toolbar className={classes.toolbar}>
              <br />
              <Container maxWidth="sm" className={classes.container}>
                  <img src={facebook} alt="" className={classes.icon}/>
                  <img src={instaram} alt="" className={classes.icon} />
                  <img src={twitter} alt="" className={classes.icon} />
              </Container>
            <Typography variant="body1" color="inherit">
              © 2021 masoomeh aslani
            </Typography>
            <br />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Footer;
