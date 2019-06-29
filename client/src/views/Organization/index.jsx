import React, { useEffect, useState } from "react";
import { getOrganizations } from "../../actions/organizationActions";
import isEmpty from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { OrganizationToolbar } from "./components";
import { OrganizationTable } from "./components";
import { OrganizationForm } from "./components";

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

function Organization({ getOrganizations, organization }) {
  const classes = styles();
  const { isLoading, organizations } = organization;
  const [form, setForm] = useState(true);

  const toggleForm = () => {
    setForm(!form);
  };

  useEffect(() => {
    getOrganizations(5, 0);
  }, [getOrganizations]);

  return (
    <DashboardLayout title="Organization">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <OrganizationToolbar toggleForm={toggleForm} isFormOpen={form} />
          </Grid>
          {form ? (
            <Grid item lg={12} sm={12} xl={12} xs={12}>
              {isLoading ? (
                <div className={classes.progressWrapper}>
                  <CircularProgress />
                </div>
              ) : isEmpty(organizations) ? (
                <Typography className={classes.noData} variant="h5">
                  There are no organizations
                </Typography>
              ) : (
                <OrganizationTable
                  numRowsPerPage={2}
                  organizations={organizations}
                  count={organization.count}
                />
              )}
            </Grid>
          ) : (
            <Grid item lg={12} xl={12} xs={12} sm={12}>
              <OrganizationForm toggleForm={toggleForm} />
            </Grid>
          )}
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  getOrganizations: PropTypes.func.isRequired,
  organization: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  organization: state.organization
});

export default connect(
  mapStateToProps,
  { getOrganizations }
)(Organization);
