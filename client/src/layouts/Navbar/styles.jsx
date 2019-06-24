import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.common.white,
    borderBottom: `1px solid ${theme.palette.border}`
  },
  toolbar: {
    justifyContent: "space-between"
  },
  left: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start"
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
    marginRight: theme.spacing(3)
  },
  login: {
    textDecoration: "none",
    color: theme.palette.primary.dark,
    fontWeight: 700
  },
  image: {
    height: "63px"
  }
}));
