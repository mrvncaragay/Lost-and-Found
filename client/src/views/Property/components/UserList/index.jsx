import React, { useEffect, Fragment } from "react";
import { isEmpty } from "util/validation";
import { setForm, postUserProperty } from "actions";

import { NotificationSnackbar } from "layouts";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";

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

function OrgAdmin({ setForm, property, postUserProperty, notify }) {
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
    saveFormFunc: data => postUserProperty(data)
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
        <DataTable title="" column={column} data={users} options={options} />
      )}
    </Fragment>
  );
}

OrgAdmin.propTypes = {
  setForm: PropTypes.func.isRequired,
  postUserProperty: PropTypes.func.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  { setForm, postUserProperty }
)(OrgAdmin);
