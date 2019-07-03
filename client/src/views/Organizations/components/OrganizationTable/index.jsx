import React, { useState, Fragment } from "react";
import isEmpty from "../../../../util/validation";
import { getOrganizations } from "actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import { TableToolbar, TableItem, ItemForm } from "./components";

// Material components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Paper,
  FormHelperText
} from "@material-ui/core";

// Component styles
import styles from "./styles";

function OrganizationTable({ getOrganizations, organizations, errors }) {
  const [addItem, setAddItem] = useState(false);
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
      <FormHelperText className={classes.error}>{errors}</FormHelperText>

      <Paper className={classes.paper}>
        <TableToolbar
          toggleAddItem={setAddItem}
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
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Property Code</TableCell>
                <TableCell align="left">Address</TableCell>
                <TableCell className={classes.actions} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {addItem ? <ItemForm toggleAddItem={setAddItem} /> : null}

              {organizations.data.map(orgazanition => (
                <Fragment key={orgazanition._id}>
                  <TableItem data={orgazanition} />
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

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getOrganizations }
)(OrganizationTable);
