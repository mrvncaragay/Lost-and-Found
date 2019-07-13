import React from "react";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import { Button } from "@material-ui/core";

// Material icons
import { ArrowRight as ArrowRightIcon } from "@material-ui/icons";

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

function LatestLostItemList({ classes, title }) {
  const rootClassName = classNames(classes.root);

  return (
    <Portlet className={rootClassName}>
      <PortletHeader noDivider>
        <PortletLabel title={title} />
      </PortletHeader>
      <PortletContent className={classes.portletContent}></PortletContent>
      <PortletFooter className={classes.portletFooter}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </PortletFooter>
    </Portlet>
  );
}

LatestLostItemList.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LatestLostItemList);
