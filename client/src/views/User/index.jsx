import React from "react";
import { isSwAdmin, isOrgAdmin, isPropAdmin } from "util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { NotificationSnackbar } from "layouts";
import { SwAdmin, OrgAdmin, PropAdmin } from "./components";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

const styles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  }
}));

function User({ notify, auth }) {
  const classes = styles();

  return (
    <DashboardLayout title="Users">
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12} className={classes.item}>
            {isSwAdmin(auth.user.adminType) ? <SwAdmin /> : null}
            {isOrgAdmin(auth.user.adminType) ? <OrgAdmin /> : null}
            {isPropAdmin(auth.user.adminType) ? <PropAdmin /> : null}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

User.propTypes = {
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  {}
)(User);
