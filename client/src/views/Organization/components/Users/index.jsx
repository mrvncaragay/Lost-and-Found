import React from "react";

// Material components
import { Typography, Paper } from "@material-ui/core";

// Material icons
import { PeopleOutlined as PeopleIcon } from "@material-ui/icons";

// Component style
import styles from "./styles";

function Users() {
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            TOTAL USERS
          </Typography>
          <Typography className={classes.value} variant="h3">
            3300
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <PeopleIcon className={classes.icon} />
        </div>
      </div>
    </Paper>
  );
}

export default Users;
