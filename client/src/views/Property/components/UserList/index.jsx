import React, { useEffect, Fragment } from "react";
import { setForm, postUserProperty, editUserProperty } from "actions";

import { NotificationSnackbar } from "layouts";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";

// Shared layouts
import { DataTable } from "layouts";

const styles = makeStyles(theme => ({
  progressWrapper: {
    paddingTop: "48px",
    paddingBottom: "24px",
    display: "flex",
    justifyContent: "center"
  },
  noData: {
    display: "flex",
    justifyContent: "center",
    color: theme.palette.common.muted
  }
}));

function UserList({
  setForm,
  property,
  postUserProperty,
  notify,
  editUserProperty
}) {
  const classes = styles();
  const { isLoading, users } = property;

  const column = ["Name", "Email", "Admin Type", "Status"];
  const options = {
    selectInput: [
      {
        column: "Admin Type",
        optionValue: ["security", "propAdmin"]
      },
      {
        column: "Status",
        optionValue: ["active", "inactive"]
      }
    ],
    colLink: { name: "Name", link: "/user/" },
    passwordField: true,
    addButtonSetForm: type => setForm("User", type),
    saveFormFunc: data => postUserProperty(data),
    saveFormEdit: data => editUserProperty(data)
  };

  /* eslint-disable */
    useEffect(() => {
    }, []);
    /* eslint-enable */

  return (
    <Fragment>
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      {isLoading ? (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <DataTable
          title="Users"
          column={column}
          data={users}
          options={options}
        />
      )}
    </Fragment>
  );
}

UserList.propTypes = {
  setForm: PropTypes.func.isRequired,
  postUserProperty: PropTypes.func.isRequired,
  editUserProperty: PropTypes.func.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  { setForm, postUserProperty, editUserProperty }
)(UserList);
