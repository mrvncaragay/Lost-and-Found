import React, { useEffect } from "react";
import { getOrganizations } from "actions";
import isEmpty from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { Properties, Users, PropertiesTable, PropertyForm } from "./components";

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

function Organizations({ getOrganizations, organization, name }) {
  const classes = styles();
  const { isLoading, organizations } = organization;

  useEffect(() => {
    getOrganizations(10, 0);
  }, [getOrganizations]);

  return (
    <DashboardLayout title={name.replace(/-/gi, " ")}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <Properties />
          </Grid>

          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <Users />
          </Grid>

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            <PropertiesTable />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organizations.propTypes = {
  getOrganizations: PropTypes.func.isRequired,
  organization: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  organization: state.organization
});

export default connect(
  mapStateToProps,
  { getOrganizations }
)(Organizations);
