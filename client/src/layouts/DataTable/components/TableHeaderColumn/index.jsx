import React from "react";

// Material components
import { TableCell } from "@material-ui/core";

function TableHeaderColumn({ title }) {
  return <TableCell align="left">{title}</TableCell>;
}

export default TableHeaderColumn;
