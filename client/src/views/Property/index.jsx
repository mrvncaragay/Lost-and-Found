import React, { useEffect } from "react";
import { setForm, getPropertyData } from "actions";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout, NotificationSnackbar } from "layouts";

import {
  Lost,
  Found,
  Returned,
  Inquired,
  LatestLostItemList,
  UserList
} from "./components";

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

function Property({ property, name, notify, getPropertyData }) {
  const classes = styles();

  const { isLoading, main, lost } = property;

  /* eslint-disable */
  useEffect(() => {

  
    getPropertyData();
  }, [])
  /* eslint-enable */

  return (
    <DashboardLayout
      title={`${name.replace(/-/gi, " ")} (${main.propertyCode})`}
    >
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      {isLoading ? (
        <div className={classes.progressWrapper}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.root}>
          <Grid container spacing={4}>
            <Grid item lg={3} xl={3} sm={12} xs={12}>
              <Lost
                title="REPORTED LOST"
                count={lost.length === 0 ? 0 : lost.length}
              />
            </Grid>

            <Grid item lg={3} xl={3} sm={12} xs={12}>
              <Found title="ITEMS FOUND" count={12} />
            </Grid>

            <Grid item lg={3} xl={3} sm={12} xs={12}>
              <Inquired title="INQUIRIES" count={12} />
            </Grid>

            <Grid item lg={3} xl={3} sm={12} xs={12}>
              <Returned title="ITEMS RETURNED" count={12} />
            </Grid>

            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <LatestLostItemList title="Recently Lost Items" count={12} />
            </Grid>

            <Grid item lg={4} xl={4} sm={12} xs={12}>
              <LatestLostItemList title="Recently Found Items" count={12} />
            </Grid>

            <Grid item lg={12} xl={12} sm={12} xs={12}>
              <UserList />
            </Grid>
          </Grid>
        </div>
      )}
    </DashboardLayout>
  );
}

Property.propTypes = {
  setForm: PropTypes.func.isRequired,
  getPropertyData: PropTypes.func.isRequired,
  property: PropTypes.object.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  { setForm, getPropertyData }
)(Property);
