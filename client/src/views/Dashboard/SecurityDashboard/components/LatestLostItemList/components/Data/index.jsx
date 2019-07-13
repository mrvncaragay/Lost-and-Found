import React, { Fragment } from "react";
import { Link } from "react-router-dom";

// Material components
import { Button, Typography } from "@material-ui/core";

// Component styles
import styles from "./styles";

function Data({ item }) {
  const classes = styles();

  return (
    <Fragment>
      <div className={classes.headerItem}>
        <Typography className={classes.productTimestamp} variant="body2">
          Ref# {item.ref}
        </Typography>
        <span className={classes.spacer} />
        <Button className={classes.buttonLost} size="small" variant="text">
          {item.status}
        </Button>
      </div>

      <Link to="#">
        <Typography variant="h6">{item.description}</Typography>
      </Link>
      <Typography className={classes.productTimestamp} variant="body2">
        Lost on {item.dateRegistered.date} at {item.dateRegistered.time}
      </Typography>
      <Typography className={classes.productTimestamp} variant="body2">
        Lost in {item.locatedAt}
      </Typography>
      <div className={classes.footerItem}>
        <span className={classes.spacer} />
        <Typography className={classes.productTimestamp} variant="body2">
          Posted 1hr ago
        </Typography>
      </div>
    </Fragment>
  );
}

export default Data;
