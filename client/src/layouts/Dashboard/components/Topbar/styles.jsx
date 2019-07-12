import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: "flex",
    alignItems: "center",
    height: "64px",
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: "auto",
    width: "100%"
  },
  title: {
    marginLeft: theme.spacing(1),
    flexGrow: 1
  },
  menuButton: {
    marginLeft: "-4px"
  },
  notificationsButton: {
    marginLeft: "auto"
  },
  signOutButton: {
    marginLeft: "auto"
  },
  addSVG: {
    width: "16px",
    fontSize: "16px",
    paddingBottom: "2px"
  },
  addButtons: {
    marginRight: theme.spacing(1)
  },
  paper: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
    outline: "none",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  containerRoot: {}
}));
