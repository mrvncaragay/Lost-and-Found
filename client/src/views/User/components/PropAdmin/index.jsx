import React, { useEffect } from "react";
import { isEmpty } from "util/validation";
import {
  getPropertyData,
  setForm,
  postUserProperty,
  editUserProperty
} from "actions";

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

function PropAdmin({
  setForm,
  getPropertyData,
  postUserProperty,
  editUserProperty,
  property
}) {
  const classes = styles();
  const { isLoading, users, main } = property;

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

      getPropertyData();
    }, []);
    /* eslint-enable */

  return isLoading ? (
    <div className={classes.progressWrapper}>
      <CircularProgress />
    </div>
  ) : isEmpty(users) ? (
    <Typography className={classes.noData} variant="h5">
      There are no users
    </Typography>
  ) : (
    <DataTable title="" column={column} data={users} options={options} />
  );
}

PropAdmin.propTypes = {
  postUserProperty: PropTypes.func.isRequired,
  editUserProperty: PropTypes.func.isRequired,
  getPropertyData: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  property: state.property
});

export default connect(
  mapStateToProps,
  { getPropertyData, setForm, postUserProperty, editUserProperty }
)(PropAdmin);
