import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import { Grid } from "@material-ui/core";

// Material helpers
import { withStyles } from "@material-ui/core";

// Shared layouts
import { Dashboard as DashboardLayout, NotificationSnackbar } from "layouts";

// Custom components
import { Users } from "./components";

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  }
});

function Dashboard({ classes, notify }) {
  return (
    <DashboardLayout title="Dashboard">
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Users className={classes.item} />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <Users className={classes.item} />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Dashboard.propTypes = {
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  notify: state.notify
});

export default connect(
  mapStateToProps,
  {}
)(withStyles(styles)(Dashboard));
