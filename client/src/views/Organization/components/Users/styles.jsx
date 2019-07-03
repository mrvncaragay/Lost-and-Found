import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    display: "flex",
    alignItems: "center"
  },
  title: {
    fontWeight: 700,
    color: theme.palette.text.secondary
  },
  value: {
    marginTop: theme.spacing(1)
  },
  iconWrapper: {
    alignItems: "center",
    backgroundColor: theme.palette.success.main,
    borderRadius: "50%",
    display: "inline-flex",
    height: "4rem",
    justifyContent: "center",
    marginLeft: "auto",
    width: "4rem"
  }
}));
