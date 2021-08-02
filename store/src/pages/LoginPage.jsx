import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {login} from "./../api/login";
import { useHistory } from "react-router-dom";
import {useLoginPageStyle} from "../style"

const LoginPage = () => {
  const classes = useLoginPageStyle();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleLogin=(e)=>{
  e.preventDefault();
  if ((email, password)) {
    login(email, password)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push("/adminPanel/products");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  } else {
    console.log("fiels are empty");
  }
 }

 const handleChange = (e)=>{
  if (e.target.name === "email") {
    setEmail(e.target.value);
  } else {
    setPassword(e.target.value);
  } 
 }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.header}>
          ورود به پنل مدیریت
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="آدرس ایمیل"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="رمز عبور"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ورود
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default LoginPage;