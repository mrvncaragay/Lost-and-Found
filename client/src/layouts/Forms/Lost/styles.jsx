// Component styles
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    zIndex: 1,
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
    outline: "none",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  grid: {
    height: "100%"
  },
  formHeader: {
    display: "flex",
    alignItems: "center"
  },

  formFooter: {
    display: "flex",
    alignItems: "center"
  },

  itemInfo: {
    display: "flex",
    margin: theme.spacing(1, 0, 1, 0),
    width: "100%"
  },

  closeButton: {
    padding: 0
  },
  saveButton: {
    marginLeft: theme.spacing(1)
  },
  divider: {
    width: "inherit"
  },

  spacer: {
    flexGrow: 1
  }
}));
