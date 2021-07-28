import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";


export const useFormStyle = makeStyles((theme)=>({
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50%',
        },
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
      },
}))