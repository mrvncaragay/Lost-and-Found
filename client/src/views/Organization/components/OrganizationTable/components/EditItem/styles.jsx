// Material helpers
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
  tableRow: {
    height: "64px"
  },
  tableCell: {
    minWidth: "229px",
    whiteSpace: "nowrap"
  },
  tableCellInner: {
    display: "flex",
    alignItems: "center"
  },
  actions: {
    paddingLeft: "36px"
  }
}));
