import React, { memo } from "react";
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

function UsersTable({ organizations }) {
  const classes = styles();

  const handleChangePage = () => {};
  const handleChangeRowsPerPage = () => {};

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
          count={12}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={0}
          rowsPerPage={10}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </PortletContent>
    </Portlet>
  );
}

export default memo(UsersTable);
