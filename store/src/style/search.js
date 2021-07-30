import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";

export const useSearchStyle = makeStyles((theme) => ({
  searchContainer: {
    margin: "150px 0",
    // width: "100%",
  },
  grid:{
      width:"60%"
  },
  searchFild: {
    width: "100%",
  },
}));
