// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {},
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  actions: {
    paddingLeft: "36px"
  },
  error: {
    color: theme.palette.danger.main,
    textAlign: "center"
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.common.muted
  }
}));
