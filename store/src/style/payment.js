import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";

export const usePaymentStyle = makeStyles((theme)=>({
    paymentContainer:{
        marginTop:"70px"
    },
    btnContainer:{
        display:"flex",
        justifyContent:"center",
        margin:"10px 0"
    },
    confirmBtn:{
        backgroundColor:COLORS.Green,
        margin:"0 5px",
        width:"100%"
    },
    cancelBtn:{
        backgroundColor:COLORS.DarkPink,
        margin:"0 10px",
        width:"100%"
    }
}))