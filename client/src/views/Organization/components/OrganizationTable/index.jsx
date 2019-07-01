import React, { Fragment } from "react";
import isEmpty from "../../../../util/validation";
import { Link } from "react-router-dom";
import { getOrganizations } from "../../../../actions/organizationActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import { TableToolbar, TableForm, OrganizationItem } from "./components";

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
  Typography,
  IconButton,
  Paper
} from "@material-ui/core";

import { Edit, DeleteOutline, AddBox } from "@material-ui/icons";

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
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableForm />
        <TableToolbar
          title="Active Organizations"
          organizations={organizations}
        />

        {isEmpty(organizations.data) ? (
          <Typography className={classes.noData} variant="h5">
            There are no active organizations...
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.actions} align="left">
                  Actions
                </TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Property Code</TableCell>
                <TableCell align="left">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizations.data.map(orgazanition => (
                <Fragment key={orgazanition._id}>
                  <OrganizationItem {...orgazanition} />
                </Fragment>
              ))}
            </TableBody>
          </Table>
        )}

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
      </Paper>
    </div>
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
