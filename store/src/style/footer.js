import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";

export const useFooterStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.DarkBlue,
},
toolbar: {
      display:"flex",
      flexDirection: "column",
  },
  container: {
    display: "flex",
    justifyContent:"center"
  },
  icon: {
    width: "5%",
    margin:"0 5px 5px 5px"
  },
}));
