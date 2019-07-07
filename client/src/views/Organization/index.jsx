import React, { useEffect } from "react";
import { getProperties, setModel } from "actions";
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
  propertyState,
  notify,
  setModel,
  organization
}) {
  const classes = styles();

  const { isLoading, properties } = propertyState;

  /* eslint-disable */
  useEffect(() => {
    setModel("Property")
    
    getProperties(50, organization.propertyCode);
  }, []);
  /* eslint-enable */

  const column = ["Name", "Property Code", "Address", "Phone"];

  return (
    <DashboardLayout title={name.replace(/-/gi, " ")}>
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          {/* <Grid item lg={6} xl={6} sm={12} xs={12}>
            <h1>One</h1>
          </Grid>

          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <h1>Two</h1>
          </Grid> */}

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(properties) ? null : (
              <DataTable title="" column={column} data={properties.data} />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  getProperties: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  propertyState: PropTypes.object.isRequired,
  notify: PropTypes.object,
  organization: PropTypes.object
};

const mapStateToProps = state => ({
  propertyState: state.property,
  notify: state.notify,
  organization: state.organization.organization
});

export default connect(
  mapStateToProps,
  { getProperties, setModel }
)(Organization);
