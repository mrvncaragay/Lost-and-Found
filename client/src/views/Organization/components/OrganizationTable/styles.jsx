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
  noData: {
    textAlign: "center",
    color: theme.palette.common.muted
  },
  error: {
    color: theme.palette.danger.main,
    textAlign: "center"
  }
}));
