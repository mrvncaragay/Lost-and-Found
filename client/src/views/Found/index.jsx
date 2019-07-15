import React, { useEffect } from "react";

import { getPropertyFound } from "actions";
import { isEmpty } from "util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { DataTable } from "layouts";

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

function Found({ getPropertyFound, property }) {
  const classes = styles();
  const { isLoading, found } = property;

  /* eslint-disable */
  useEffect(() => {
    getPropertyFound();
  }, []);
    /* eslint-enable */

  const column = ["Ref", "Description", "Located At", "Status"];
  const options = {
    addButton: false
  };

  return (
    <DashboardLayout title="Found Items Records">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            {isLoading ? (
              <div className={classes.progressWrapper}>
                <CircularProgress />
              </div>
            ) : (
              <DataTable
                title=""
                column={column}
                data={found}
                options={options}
              />
            )}
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

Found.propTypes = {
  getPropertyFound: PropTypes.func.isRequired,
  property: PropTypes.object
};

const mapStateToProps = state => ({
  property: state.property
});

export default connect(
  mapStateToProps,
  { getPropertyFound }
)(Found);
