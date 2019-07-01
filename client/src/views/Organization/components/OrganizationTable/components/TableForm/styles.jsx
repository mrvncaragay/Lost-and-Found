import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.default,
    backgroundColor: theme.palette.background.default
    // height: "100vh"
  },
  container: {
    height: "50%",
    display: "flex",
    //justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      height: "50%"
    }
  },
  formInput: {
    display: "flex",
    flex: 3,
    justifyContent: "space-between",
    paddingRight: theme.spacing(3)
  },
  formControl: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    paddingLeft: theme.spacing(3)
  },
  contentBody: {
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      maxWidth: "100%"
    }
  },
  mainForm: {
    display: "flex",
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.border}`,
    padding: theme.spacing(3),
    width: "100%"
  },
  formHeader: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(2)
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
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end"
  },
  signInButton: {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1)
  },
  error: {
    color: theme.palette.danger.main,
    textAlign: "center"
  },
  input: {
    margin: theme.spacing(1)
  }
}));
