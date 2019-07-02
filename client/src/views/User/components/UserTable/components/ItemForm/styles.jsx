// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    padding: "14px 40px 14px 24px",
    alignItems: "center",
    borderBottom: "1px solid #DFE3E8"
  },
  item: {
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "14px 10px 14px 14px",
      textAlign: "center"
    }
  },

  actions: {
    [theme.breakpoints.down("sm")]: {
      margin: "auto"
    }
  },
  selectItem: {
    minWidth: "100px"
  }
}));
