import React from "react";

// Material components
import { Grid } from "@material-ui/core";

// Material helpers
import { withStyles } from "@material-ui/core";

// Shared layouts
import { Dashboard as DashboardLayout } from "layouts";

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing(4)
  },
  item: {
    height: "100%"
  }
});

function Dashboard({ classes }) {
  return (
    <DashboardLayout title="Dashboard">
      <div className={classes.root}>
        <Grid container spacing={4}>
          <Grid item lg={3} sm={6} xl={3} xs={12}>
            <h1>Item 1</h1>
          </Grid>
        </Grid>
      </div>
    </DashboardLayout>
  );
}

export default withStyles(styles)(Dashboard);
