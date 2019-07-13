import React, { Fragment } from "react";

// Externals
import PropTypes from "prop-types";

// Material components
import { Button, Divider } from "@material-ui/core";

// Material icons
import { ArrowRight as ArrowRightIcon } from "@material-ui/icons";

// Shared components
import { Data } from "./components";

import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from "components";

// Component styles
import styles from "./styles";

function LatestLostItemList({ title, data }) {
  const classes = styles();

  return (
    <Portlet className={classes.root}>
      <PortletHeader noDivider>
        <PortletLabel title={title} />
      </PortletHeader>
      <PortletContent className={classes.portletContent}>
        {data.map((item, index) => (
          <Fragment key={index}>
            <Data item={item} />

            {index === data.length - 1 ? null : (
              <Divider variant="fullWidth" className={classes.divider} />
            )}
          </Fragment>
        ))}
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

export default LatestLostItemList;
