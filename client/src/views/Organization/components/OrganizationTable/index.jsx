import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getOrganizations } from "../../../../actions/organizationActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

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

function OrganizationTable({ getOrganizations, organizations }) {
  const classes = styles();

  const handleChangePage = (e, page) => {
    getOrganizations(organizations.perRow, page);
  };

  const handleChangeRowsPerPage = e => {
    const pageRow = parseInt(e.target.value, 10);
    const maxPageNum = Math.floor(organizations.count / pageRow);

    if (organizations.pageNum > maxPageNum) {
      return getOrganizations(pageRow, maxPageNum);
    }

    getOrganizations(pageRow, organizations.pageNum);
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
            {organizations.data.map(orgazanition => (
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
          count={organizations.count}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={organizations.pageNum}
          rowsPerPage={organizations.perRow}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </PortletContent>
    </Portlet>
  );
}

OrganizationTable.propTypes = {
  getOrganizations: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { getOrganizations }
)(OrganizationTable);
