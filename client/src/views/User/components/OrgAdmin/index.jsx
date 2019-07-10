import React, { useEffect } from "react";
import { isEmpty } from "util/validation";
import { getUsers, setForm } from "actions";

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

function OrgAdmin({ getUsers, setForm, users }) {
  const classes = styles();
  const { isLoading, data } = users;

  const column = ["Name", "Email", "Property Code", "Admin Type", "Status"];
  const options = {
    selectInput: [
      {
        column: "Admin Type",
        optionValue: ["security", "propAdmin", "orgAdmin", "swAdmin"]
      },
      {
        column: "Status",
        optionValue: ["active", "inactive"]
      }
    ],
    colLink: { name: "Name", link: "/user/" },
    passwordField: true,
    addButton: false,
    addButtonSetForm: type => setForm("User", type)
  };

  /* eslint-disable */
    useEffect(() => {
  
      getUsers();
    }, []);
    /* eslint-enable */

  return isLoading ? (
    <div className={classes.progressWrapper}>
      <CircularProgress />
    </div>
  ) : isEmpty(data) ? (
    <Typography className={classes.noData} variant="h5">
      There are no users
    </Typography>
  ) : (
    <DataTable title="" column={column} data={data} options={options} />
  );
}

OrgAdmin.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(
  mapStateToProps,
  { getUsers, setForm }
)(OrgAdmin);
