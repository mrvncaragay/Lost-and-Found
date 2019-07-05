import React from "react";

// Material Component
import { TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  tableCell: {
    whiteSpace: "nowrap"
  }
}));

function ComponentItem({ data }) {
  const classes = styles();
  return <TableCell className={classes.tableCell}>{data}</TableCell>;
}

export default ComponentItem;
