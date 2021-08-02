import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";

export const useFormStyle = makeStyles((theme) => ({
  container:{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent:"center",
  },
  root: {
    boxShadow: theme.shadows[5],
    width:"60%",
    margin:"20px 0",
    [theme.breakpoints.down('sm')]:{
      margin:"0px 0",
      width:"90%"
    }
  },
  title:{
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    margin:"100px 0px 10px 0px",
    textAlign:"center"
  },
  text:{
    width:"100%",
    color:COLORS.Cinnabar
  },
  fild: {
    "& > *": {
      width: "70%",
    },
    margin: "20px 0",
    width: "100%",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    justifyContent:"center"
  },
  submitBtn:{
    backgroundColor:COLORS.Cinnabar,
    boxShadow: theme.shadows[5],
    border:"none",
    "& > *":{
      color:COLORS.white,
      fontSize: '1.2rem',
    }
  },
  error:{
    color:COLORS.Cinnabar,
    display:"flex",
    fontWeight:"bolder"
  },
  icon:{
    width:"20px",
    height:"20px",
    margin:"0px 3px 0 5px"
  }
}));
