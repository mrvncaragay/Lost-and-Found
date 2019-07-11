import React, { useEffect } from "react";
import { getOrganizationData, setForm } from "actions";

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
  getOrganizationData,
  name,
  notify,
  setForm,
  organization
}) {
  const classes = styles();

  const { isLoading, organization: mainOrg } = organization;

  /* eslint-disable */
  useEffect(() => {
  
    getOrganizationData();
  }, []);
  /* eslint-enable */

  const propertyColumn = ["Name", "Property Code", "Address", "Phone"];
  const propertyOptions = {
    addButtonSetForm: type => setForm("Property", type)
  };

  const ucolumn = ["Name", "Email", "Admin Type", "Status"];
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
    passwordField: true,
    addButtonSetForm: type => setForm("User", type)
  };

  return (
    <DashboardLayout
      title={`${name.replace(/-/gi, " ")} (${mainOrg.main.organizationCode})`}
    >
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

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : (
              <DataTable
                title="Organization Users"
                column={ucolumn}
                data={mainOrg.users}
                options={uoptions}
              />
            )}
          </Grid>

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : (
              <DataTable
                title="Properties"
                column={propertyColumn}
                options={propertyOptions}
                data={mainOrg.properties}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  getOrganizationData: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
  notify: PropTypes.object,
  organization: PropTypes.object
};

const mapStateToProps = state => ({
  notify: state.notify,
  organization: state.organization
});

export default connect(
  mapStateToProps,
  { getOrganizationData, setForm }
)(Organization);
