// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  productTimestamp: {
    color: theme.palette.text.secondary
  },
  buttonLost: {
    color: theme.palette.success.main
  },
  headerItem: {
    display: "flex",
    width: "100%",
    alignItems: "center"
  },
  footerItem: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  }
}));
