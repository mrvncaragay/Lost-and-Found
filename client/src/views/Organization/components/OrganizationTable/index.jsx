import React, { useState, memo } from "react";
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
  TablePagination,
  Typography
} from "@material-ui/core";

// Shared components
import { Portlet, PortletContent } from "components";

// Component styles
import styles from "./styles";

function OrganizationTable({ organizations, count, numRowsPerPage }) {
  const classes = styles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(numRowsPerPage);

  const handleChangePage = e => {
    console.log(e.target);
    setPage(page + 1);
  };
  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10));
  };

  return (
    <Portlet className={classes.root}>
      <PortletContent noPadding>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">
                <Checkbox color="primary" />
                Name
              </TableCell>
              <TableCell align="left">Property Code</TableCell>
              <TableCell align="left">Address</TableCell>
              <TableCell align="left">Number of Properties</TableCell>
              <TableCell align="left">Registration date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {organizations.map(orgazanition => (
              <TableRow
                key={orgazanition._id}
                className={classes.tableRow}
                hover
              >
                <TableCell className={classes.tableCell}>
                  <div className={classes.tableCellInner}>
                    <Checkbox color="primary" value="true" />
                    <Link to="#">
                      <Typography className={classes.nameText} variant="body1">
                        {orgazanition.name}
                      </Typography>
                    </Link>
                  </div>
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {orgazanition.propertyCode}
                </TableCell>
                <TableCell className={classes.tableCell}>
                  {orgazanition.address}
                </TableCell>
                <TableCell className={classes.tableCell}>32</TableCell>
                <TableCell className={classes.tableCell}>June 20</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          component="div"
          count={count}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[2, 4, 6]}
        />
      </PortletContent>
    </Portlet>
  );
}

export default memo(OrganizationTable);
