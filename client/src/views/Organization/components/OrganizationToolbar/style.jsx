// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    display: "flex"
  },
  search: {
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    border: `1px solid ${theme.palette.border}`,
    flexBasis: "300px",
    [theme.breakpoints.down("sm")]: {
      flexBasis: "auto"
    }
  },
  iconButton: {
    padding: "5px"
  },
  searchInput: {
    marginRight: theme.spacing(0),
    fontSize: "14px",
    flexBasis: "auto"
  },
  spacer: {
    flexGrow: 1
  }
}));
