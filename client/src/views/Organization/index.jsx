import React, { useEffect } from "react";
import { getProperties, setModel, getOrgUsers } from "actions";
import { isEmpty } from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import {
  Dashboard as DashboardLayout,
  DataTable,
  NotificationSnackbar
} from "layouts";

import { Users } from "./components";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress } from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  },
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

function Organization({
  getProperties,
  name,
  property,
  notify,
  setModel,
  getOrgUsers,
  users,
  organization
}) {
  const classes = styles();

  const { isLoading, properties } = property;
  const { isLoading: userLoading, data } = users;

  /* eslint-disable */
  useEffect(() => {
    setModel("Property")

    //getProperties(50, organization.organizationCode); //this is null if page is refreshed
    getOrgUsers(organization.organizationCode);
  }, []);
  /* eslint-enable */

  const column = ["Name", "Property Code", "Address", "Phone"];

  const ucolumn = [
    "Name",
    "Email",
    "Organization Code",
    "Admin Type",
    "Status"
  ];
  const uoptions = {
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
    passwordField: true
  };

  return (
    <DashboardLayout title={name.replace(/-/gi, " ")}>
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={4} xl={4} sm={12} xs={12}>
            <Users title="PROPERTIES" />
          </Grid>

          <Grid item lg={4} xl={4} sm={12} xs={12}>
            <Users title="ADMINS" />
          </Grid>

          <Grid item lg={4} xl={4} sm={12} xs={12}>
            <Users title="USERS" />
          </Grid>

          {/* <Grid item lg={12} xl={12} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(properties) ? null : (
              <DataTable
                title="Properties"
                column={column}
                data={properties.data}
              />
            )}
          </Grid> */}

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            {userLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(data) ? null : (
              <DataTable
                title="Users"
                column={ucolumn}
                data={data}
                options={uoptions}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  getProperties: PropTypes.func.isRequired,
  getOrgUsers: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  users: PropTypes.object,
  notify: PropTypes.object,
  organization: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property,
  notify: state.notify,
  users: state.users,
  organization: state.organization.organization
});

export default connect(
  mapStateToProps,
  { getProperties, setModel, getOrgUsers }
)(Organization);
