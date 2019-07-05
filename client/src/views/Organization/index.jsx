import React from "react";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout, DataTable } from "layouts";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

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

function Organization({ name }) {
  const classes = styles();

  const column = ["Name", "Property Code", "Address", "Phone"];
  const data = [];
  return (
    <DashboardLayout title={name.replace(/-/gi, " ")}>
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <h1>One</h1>
          </Grid>

          <Grid item lg={6} xl={6} sm={12} xs={12}>
            <h1>Two</h1>
          </Grid>

          <Grid item lg={12} xl={12} sm={12} xs={12}>
            <DataTable column={column} data={data} />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Organization.propTypes = {};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Organization);
