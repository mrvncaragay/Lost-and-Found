// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  tableRow: {
    height: "64px"
  },
  tableCell: {
    whiteSpace: "nowrap"
  },
  tableCellInner: {
    display: "flex",
    alignItems: "center"
  },
  nameText: {
    display: "inline-block",
    fontWeight: 500,
    cursor: "pointer"
  },
  actions: {
    paddingLeft: "36px"
  }
}));
