import React, { Fragment } from "react";
import isEmpty from "../../../../util/validation";
import { getUsers } from "actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Components
import { TableToolbar, TableItem } from "./components";

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

function UserTable({ getUsers, users, errors }) {
  const classes = styles();

  const handleChangePage = (e, page) => {
    getUsers(users.perRow, page);
  };

  const handleChangeRowsPerPage = e => {
    const pageRow = parseInt(e.target.value, 10);
    const maxPageNum = Math.floor(users.count / pageRow);

    if (users.pageNum > maxPageNum) {
      return getUsers(pageRow, maxPageNum);
    }

    getUsers(pageRow, users.pageNum);
  };

  return (
    <div className={classes.root}>
      <FormHelperText className={classes.error}>{errors}</FormHelperText>

      <Paper className={classes.paper}>
        <TableToolbar organizations={users} />

        {isEmpty(users.data) ? (
          <Typography className={classes.noData} variant="h5">
            There are no active users...
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Property Code</TableCell>
                <TableCell align="left">Admin Type</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell className={classes.actions} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.data.map(user => (
                <Fragment key={user._id}>
                  <TableItem data={user} />
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
          count={users.count}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={users.pageNum}
          rowsPerPage={users.perRow}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Paper>
    </div>
  );
}

UserTable.propTypes = {
  getUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUsers }
)(UserTable);
