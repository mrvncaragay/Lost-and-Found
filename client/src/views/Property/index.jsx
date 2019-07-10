import React, { useEffect } from "react";
import { getProperties, setForm } from "actions";
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
  setForm,
  organization
}) {
  const classes = styles();

  const { isLoading, properties } = propertyState;

  /* eslint-disable */
  useEffect(() => {

    getProperties(50);
  }, []);
  /* eslint-enable */

  const column = ["Name", "Property Code", "Address", "Phone"];
  const options = {
    addButtonSetForm: type => setForm("Property", type)
  };

  return (
    <DashboardLayout title={name.replace(/-/gi, " ")}>
      {notify ? (
        <NotificationSnackbar message={notify.message} type={notify.type} />
      ) : null}

      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3} xl={3} sm={12} xs={12}>
            <Lost title="REPORTED LOST" count={12} />
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
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {
  getProperties: PropTypes.func.isRequired,
  setForm: PropTypes.func.isRequired,
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
  { getProperties, setForm }
)(Organization);
