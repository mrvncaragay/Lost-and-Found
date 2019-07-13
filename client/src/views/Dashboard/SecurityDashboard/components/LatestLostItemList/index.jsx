import React from "react";
import { Link } from "react-router-dom";

// Externals
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Button,
  IconButton,
  Typography,
  CircularProgress,
  Divider
} from "@material-ui/core";

// Material icons
import {
  ArrowRight as ArrowRightIcon,
  MoreVert as MoreVertIcon
} from "@material-ui/icons";

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from "components";

// Component styles
import styles from "./styles";

function LatestLostItemList({ title }) {
  const classes = styles();

  return (
    <Portlet className={classes.root}>
      <PortletHeader noDivider>
        <PortletLabel title={title} />
      </PortletHeader>
      <PortletContent className={classes.portletContent}>
        <div className={classes.headerItem}>
          <Typography className={classes.productTimestamp} variant="body2">
            Ref# das2313
          </Typography>
          <span className={classes.spacer} />
          <Button className={classes.buttonLost} size="small" variant="text">
            New
          </Button>
        </div>

        <Link to="#">
          <Typography variant="h6">Iphone x</Typography>
        </Link>
        <Typography className={classes.productTimestamp} variant="body2">
          Lost on 2/31/2019 at 3:25am
        </Typography>
        <Typography className={classes.productTimestamp} variant="body2">
          Lost in Restaurant
        </Typography>
        <div className={classes.footerItem}>
          <span className={classes.spacer} />
          <Typography className={classes.productTimestamp} variant="body2">
            Posted 2hr ago
          </Typography>
        </div>
        <Divider variant="fullWidth" className={classes.divider} />
      </PortletContent>
      <PortletFooter className={classes.portletFooter}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </PortletFooter>
    </Portlet>
  );
}

LatestLostItemList.propTypes = {
  className: PropTypes.string
};

export default withStyles(styles)(LatestLostItemList);
