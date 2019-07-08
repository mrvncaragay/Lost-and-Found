import React from "react";

// Externals
import PropTypes from "prop-types";

// Material components
import { Typography, Paper } from "@material-ui/core";

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  LocationCityOutlined as PropertyIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Properties({ title, count }) {
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            TOTAL {title}
          </Typography>
          <Typography className={classes.value} variant="h3">
            {count}
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <PropertyIcon className={classes.icon} />
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

Properties.propTypes = {
  className: PropTypes.string
};

export default Properties;
