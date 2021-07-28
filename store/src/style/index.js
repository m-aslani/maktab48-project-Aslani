import { makeStyles, withStyles } from "@material-ui/core";
import { COLORS } from "./constantVariables";

const drawerWidth = 240;

export const headerStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: COLORS.DarkBlue,
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `clac(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    zIndex: theme.zIndex.drawer + 1,
    zIndex:99,
    marginBottom:"50px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  btnHolder: {
    position: "absolute",
    right: 20,
  },
  managerButton: {},
  cartButton: {
    color: COLORS.white,
  },
  title: {
    marginLeft: "8px",
  },
  linkContainer: {
    position: "absolute",
    right: 150,
    display: "flex",
    justifyContent: "space-between",
  },
  link: {
    margin: "0 10px",
    color: COLORS.white,
  },
}));

export const useLoginPageStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: COLORS.white,
    backgroundColor: COLORS.Cinnabar,
  },
  header: {
    color: COLORS.DarkBlue,
  },
}));

export const useTableStyle = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  container: {
    maxHeight: 440,
  },
  tabelCell: {
    height: "50px",
  },
  tabelHeader: {
    backgroundColor: COLORS.Yellow,
  },
}));

export const useProductsPageStyle = makeStyles((theme) => ({
  tabelContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    margin: "20px 0 20px 80px ",
    color: COLORS.DarkBlue,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
  },
  button: {
    color: COLORS.white,
    backgroundColor: COLORS.Cinnabar,
  },
}));

export const useModalStyle = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
  },
  textFild: {
    margin: "20px 0",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textArea: {
    height: "180px",
    margin: "20px 0",
  },
  button: {
    color: COLORS.white,
    backgroundColor: COLORS.Cinnabar,
  },
}));

export const useOrderTable = makeStyles((theme) => ({
  tableContainer: {
    marginLeft: "100px",
  },
}));

export const useInfoTable = makeStyles((theme) => ({
  root: {
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(255, 7, 0, 0.55)',
    },
    width: "100%",
    margin: "10px 0",
  },
  container: {
    maxHeight: 440,
  },
  pagination: {
    width: "100%",
  },
}));

export const useInfoModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "400px",
  },
  title: {
    color: COLORS.Cinnabar,
    fontWeight: "bold",
  },
  button: {
    color: COLORS.white,
    backgroundColor: COLORS.Cinnabar,
  },
}));
export const useCartModal = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "600px",
    backgroundColor:COLORS.LightPink
  },
  title: {
    color: COLORS.Cinnabar,
    fontWeight: "bold",
    margin:"0 0px 0 20px"
  },
  button: {
    color: COLORS.white,
    backgroundColor: COLORS.Cinnabar,
  },
  btnHolder:{
    display:"flex",
    justifyContent: "space-between",
  }
}));
