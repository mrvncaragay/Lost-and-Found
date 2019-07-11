import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: "100vh"
  },
  grid: {
    height: "60%",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50%"
    }
  },
  contentBody: {
    flexGrow: 1,
    display: "flex",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center"
    }
  },
  mainForm: {
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.border}`,
    padding: theme.spacing(3)
  },
  formHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  image: {
    height: theme.spacing(12),
    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(8)
    }
  },
  form: {
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  textField: {
    width: "100%",
    "& + & ": {
      marginTop: theme.spacing(2)
    }
  },
  signInButton: {
    marginTop: theme.spacing(2)
  },
  signUp: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  },
  signUpUrl: {
    color: theme.palette.primary.main,
    fontWeight: "bold",
    "&:hover": {
      color: theme.palette.primary.main
    }
  },
  adminLink: {
    marginTop: theme.spacing(2),
    color: theme.palette.text.secondary
  }
}));
