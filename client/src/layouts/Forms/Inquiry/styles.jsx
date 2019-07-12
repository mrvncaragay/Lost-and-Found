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
    transform: `translate(-50%, -50%)`,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
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

  dateLostRow: {
    marginTop: theme.spacing(2),
    display: "flex",
    width: "100%"
  },

  timeLost: {
    marginLeft: theme.spacing(2)
  },

  itemInfo: {
    display: "flex",
    margin: theme.spacing(1, 0, 3, 0),
    width: "100%"
  },

  ownerInfoRow1: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },

  ownerInfoRow2: {
    display: "flex",
    width: "100%",
    margin: theme.spacing(1, 0, 3, 0)
  },
  address: {
    flexGrow: 1
  },

  itemDesc: {
    flexGrow: 1,
    marginRight: theme.spacing(2)
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
