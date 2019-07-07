import React, { useEffect } from "react";
import { getOrganizations, setModel } from "actions";
import { isEmpty } from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { DataTable, NotificationSnackbar } from "layouts";

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
  }
}));

function Organizations({ getOrganizations, setModel, organization, notify }) {
  const classes = styles();
  const { isLoading, organizations } = organization;

  /* eslint-disable */
  useEffect(() => {
    setModel("Organization")
    getOrganizations(50, 0);
  }, []);
    /* eslint-enable */

  const column = ["Name", "Property Code", "Address"];
  const options = { colLink: { name: "Name", link: "/organization/" } };

  return (
    <DashboardLayout title="Organization">
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(organizations) ? null : (
              <DataTable
                title=""
                column={column}
                data={organizations.data}
                options={options}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organizations.propTypes = {
  getOrganizations: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  organization: PropTypes.object.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  organization: state.organization,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  { getOrganizations, setModel }
)(Organizations);
