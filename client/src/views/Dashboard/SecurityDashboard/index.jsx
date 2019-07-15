import React, { useEffect, Fragment } from "react";
import { getPropertyData } from "actions";

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
  LatestLostItemList
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
    margin: "auto",
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

function SecurityDashboard({ property, notify, getPropertyData }) {
  const classes = styles();

  const {
    isLoading,
    main,
    lost,
    found,
    inquiry,
    recentLost,
    recentFound,
    recentInquiry
  } = property;

  /* eslint-disable */
  useEffect(() => {
    getPropertyData();
  }, [])
  /* eslint-enable */

  return (
    <DashboardLayout
      title={`${main.name.replace(/-/gi, " ")} (${main.propertyCode})`}
    >
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          {isLoading ? (
            <div className={classes.progressWrapper}>
              <CircularProgress />
            </div>
          ) : (
            <Fragment>
              <Grid item lg={3} xl={3} sm={12} xs={12}>
                <Lost title="REPORTED LOST" count={lost ? lost.length : 0} />
              </Grid>

              <Grid item lg={3} xl={3} sm={12} xs={12}>
                <Found title="ITEMS FOUND" count={found ? found.length : 0} />
              </Grid>

              <Grid item lg={3} xl={3} sm={12} xs={12}>
                <Inquired
                  title="INQUIRIES"
                  count={inquiry ? inquiry.length : 0}
                />
              </Grid>

              <Grid item lg={3} xl={3} sm={12} xs={12}>
                <Returned
                  title="ITEMS RETURNED"
                  count={lost ? lost.length : 0}
                />
              </Grid>

              <Grid item lg={4} xl={4} sm={12} xs={12}>
                <LatestLostItemList
                  data={recentLost}
                  title="Recently Lost Items"
                />
              </Grid>

              <Grid item lg={4} xl={4} sm={12} xs={12}>
                <LatestLostItemList
                  data={recentFound}
                  title="Recently Found Items"
                />
              </Grid>

              <Grid item lg={4} xl={4} sm={12} xs={12}>
                <LatestLostItemList
                  data={recentInquiry}
                  title="Recently Inquired Items"
                />
              </Grid>
            </Fragment>
          )}
        </Grid>
      </div>
    </DashboardLayout>
  );
}

SecurityDashboard.propTypes = {
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
  { getPropertyData }
)(SecurityDashboard);
