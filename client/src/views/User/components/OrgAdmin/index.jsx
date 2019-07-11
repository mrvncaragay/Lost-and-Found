import React, { useEffect, useState } from "react";
import { isEmpty } from "util/validation";
import { setForm, editUserProperty } from "actions";

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

function OrgAdmin({ setForm, organization, editUserProperty }) {
  const classes = styles();
  const { isLoading, organization: org } = organization;

  const column = ["Name", "Email", "Property Code", "Admin Type", "Status"];
  const options = {
    selectInput: [
      {
        column: "Admin Type",
        optionValue: ["security", "propAdmin", "orgAdmin"]
      },
      {
        column: "Status",
        optionValue: ["active", "inactive"]
      }
    ],
    colLink: { name: "Name", link: "/user/" },
    passwordField: true,
    addButtonSetForm: type => setForm("User", type),
    saveFormEdit: data => editUserProperty(data),
    addButton: false
  };

  /* eslint-disable */
    useEffect(() => {
    }, []);
    /* eslint-enable */

  return isLoading ? (
    <div className={classes.progressWrapper}>
      <CircularProgress />
    </div>
  ) : isEmpty(org.users) ? (
    <Typography className={classes.noData} variant="h5">
      There are no users
    </Typography>
  ) : (
    <DataTable title="" column={column} data={org.users} options={options} />
  );
}

OrgAdmin.propTypes = {
  setForm: PropTypes.func.isRequired,
  editUserProperty: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  organization: state.organization
});

export default connect(
  mapStateToProps,
  { setForm, editUserProperty }
)(OrgAdmin);
