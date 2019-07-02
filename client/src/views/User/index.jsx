import React, { useEffect } from "react";
import { getUsers } from "actions";
import isEmpty from "../../util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { UserTable } from "./components";

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

function User({ getUsers, user }) {
  const classes = styles();
  const { isLoading, users } = user;

  useEffect(() => {
    getUsers(5, 0);
  }, [getUsers]);

  return (
    <DashboardLayout title="Users">
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
              <UserTable users={users} count={user.count} />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

User.propTypes = {
  getUsers: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps,
  { getUsers }
)(User);
