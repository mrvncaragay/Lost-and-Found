import React from "react";

// Material components
import { Typography, Paper } from "@material-ui/core";

// Material icons
import { BusinessOutlined as BuildingIcon } from "@material-ui/icons";

// Component style
import styles from "./styles";

function Properties() {
  const classes = styles();

  return (
    <Paper className={classes.root}>
      <div className={classes.content}>
        <div className={classes.details}>
          <Typography className={classes.title} variant="body2">
            TOTAL PROPERTIES
          </Typography>
          <Typography className={classes.value} variant="h3">
            23
          </Typography>
        </div>
        <div className={classes.iconWrapper}>
          <BuildingIcon className={classes.icon} />
        </div>
      </div>
    </Paper>
  );
}

export default Properties;
