import React from "react";
import { Link } from "react-router-dom";

// Material components
import {
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from "@material-ui/core";

// Component styles
import styles from "./styles";

function UsersTable() {
  const classes = styles();

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="left">
            <Checkbox color="primary" />
            Name
          </TableCell>
          <TableCell align="left">ID</TableCell>
          <TableCell align="left">State</TableCell>
          <TableCell align="left">Phone</TableCell>
          <TableCell align="left">Registration date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className={classes.tableRow} hover>
          <TableCell className={classes.tableCell}>
            <div className={classes.tableCellInner}>
              <Checkbox color="primary" value="true" />
              <Link to="#">
                <Typography className={classes.nameText} variant="body1">
                  Name
                </Typography>
              </Link>
            </div>
          </TableCell>
          <TableCell className={classes.tableCell}>Id</TableCell>
          <TableCell className={classes.tableCell}>address</TableCell>
          <TableCell className={classes.tableCell}>phone</TableCell>
          <TableCell className={classes.tableCell}>date here</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default UsersTable;
