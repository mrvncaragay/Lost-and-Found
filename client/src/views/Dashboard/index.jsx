import React, { useEffect } from "react";
import { setForm, setCurrentProperty } from "actions";

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

import { Users, Properties, Admins } from "./components";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

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

function Organization({ notify, organization, setForm, setCurrentProperty }) {
  const classes = styles();

  const { isLoading, organization: mainOrg } = organization;

  /* eslint-disable */
  useEffect(() => {

    //getOrganizationData();
  }, []);
  /* eslint-enable */

  const column = ["Name", "Property Code", "Address", "Phone"];
  const options = {
    colLink: { name: "Name", link: `${mainOrg.main.organizationCode}/` },
    addButtonSetForm: type => setForm("Property", type),
    setSelectedData: data => setCurrentProperty(data)
  };

  return (
    <DashboardLayout
      title={`${mainOrg.main.name} (${mainOrg.main.organizationCode})`}
    >
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={4} xl={4} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(mainOrg.properties) ? (
              <Typography className={classes.noData} variant="h5">
                There are no properties
              </Typography>
            ) : (
              <Properties
                title="PROPERTIES"
                count={mainOrg.properties.length}
              />
            )}
          </Grid>

          <Grid item lg={4} xl={4} sm={12} xs={12}>
            <Admins title="ADMINS" count={3} />
          </Grid>

          <Grid item lg={4} xl={4} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(mainOrg.users) ? (
              <Typography className={classes.noData} variant="h5">
                There are no users
              </Typography>
            ) : (
              <Users title="USERS" count={mainOrg.users.length} />
            )}
          </Grid>

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(mainOrg.properties) ? null : (
              <DataTable
                title=""
                column={column}
                data={mainOrg.properties}
                options={options}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  setForm: PropTypes.func.isRequired,
  setCurrentProperty: PropTypes.func.isRequired,
  notify: PropTypes.object,
  organization: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property,
  notify: state.notify,
  organization: state.organization
});

export default connect(
  mapStateToProps,
  { setForm, setCurrentProperty }
)(Organization);
