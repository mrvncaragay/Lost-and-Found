import React from "react";

// Externals
import PropTypes from "prop-types";

// Material components
import { Typography, Paper } from "@material-ui/core";

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  PeopleOutlined as PeopleIcon
} from "@material-ui/icons";

// Component styles
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
            1600
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <PeopleIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.difference} variant="body2">
          <ArrowUpwardIcon />
          16%
        </Typography>
        <Typography className={classes.caption} variant="caption">
          Since last month
        </Typography>
      </div>
    </Paper>
  );
}

Users.propTypes = {
  className: PropTypes.string
};

export default Users;
