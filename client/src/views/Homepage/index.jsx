import React from 'react';

// Material components
import { Grid } from '@material-ui/core';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Navbar } from 'layouts';

// Component styles
const styles = theme => ({
    root: {
      padding: theme.spacing(4)
    },
    item: {
      height: '100%'
    }
  });

function Homepage() {

    return <Navbar />

};

export default withStyles(styles)(Homepage);