import React from "react";

// Externals
import PropTypes from "prop-types";

// Material components
import { Typography, Paper } from "@material-ui/core";

// Material icons
import {
  ArrowForwardOutlined as ArrowForwardIcon,
  FeedbackOutlined as LostIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Lost({ title, count }) {
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            {title}
          </Typography>
          <Typography className={classes.value} variant="h3">
            {count}
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <LostIcon className={classes.icon} />
        </div>
      </div>
      <div className={classes.footer}>
        <Typography className={classes.difference} variant="body2">
          <ArrowForwardIcon />
        </Typography>
        <Typography className={classes.caption} variant="caption">
          show all lost items
        </Typography>
      </div>
    </Paper>
  );
}

Lost.propTypes = {
  className: PropTypes.string
};

export default Lost;
