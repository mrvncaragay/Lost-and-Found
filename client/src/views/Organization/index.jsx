import React from "react";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";
import { OrganizationToolbar } from "./components";
import { OrganizationTable } from "./components";

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

function Organization() {
  const classes = styles();

  return (
    <DashboardLayout title="Organization">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <OrganizationToolbar />
          </Grid>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <OrganizationTable />
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default Organization;
