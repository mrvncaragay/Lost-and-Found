import React, { useEffect } from "react";
import { getUsers, setModel } from "actions";
import { isEmpty } from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { DataTable, ErrorSnackbar } from "layouts";

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

function User({ getUsers, setModel, user, auth, errors }) {
  const classes = styles();
  const { isLoading, users } = user;

  /* eslint-disable */
  useEffect(() => {
    setModel("USER")
    getUsers(5, 0, auth.user.propertyCode);
  }, []);
  /* eslint-enable */

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
    ]
  };

  return (
    <DashboardLayout title="Users">
      {errors ? <ErrorSnackbar message={errors} /> : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : isEmpty(users) ? (
              <Typography className={classes.noData} variant="h5">
                There are no users
              </Typography>
            ) : (
              <DataTable
                title="Users"
                column={column}
                data={users.data}
                options={options}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

User.propTypes = {
  getUsers: PropTypes.func.isRequired,
  setModel: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  user: state.user,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getUsers, setModel }
)(User);
