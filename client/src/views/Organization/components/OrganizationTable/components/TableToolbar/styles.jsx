import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  spacer: {
    flex: "1 1 100%"
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    paddingLeft: "12px",
    flex: "0 0 auto"
  },
  searchWrapper: {
    display: "flex",
    backgroundColor: theme.palette.common.white,
    boxShadow: "none",
    borderBottom: `1px solid ${theme.palette.border}`,
    minWidth: "300px",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      minWidth: "200px"
    }
  },
  searchForm: {
    width: "100%",
    display: "flex",
    alignItems: "center"
  },
  searchInput: {
    marginRight: theme.spacing(0),
    fontSize: "12px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "auto"
    }
  },
  iconButton: {
    padding: "0 5px 0 5px",
    fontSize: "12px"
  }
}));
