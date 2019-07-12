import React from "react";

// Externals
import classNames from "classnames";
import PropTypes from "prop-types";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Button,
  IconButton,
  Typography,
  CircularProgress
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

function LatestLostItemList({ classes, title }) {
  // renderProducts() {
  //   const { classes } = this.props;
  //   const { isLoading, products } = this.state;

  //   if (isLoading) {
  //     return (
  //       <div className={classes.progressWrapper}>
  //         <CircularProgress />
  //       </div>
  //     );
  //   }

  //   if (0) {
  //     return (
  //       <Typography variant="h6">There are no products available</Typography>
  //     );
  //   }

  //   return (
  //     <Fragment>
  //       <div className={classes.product}>
  //         <div className={classes.productImageWrapper}>
  //           <img alt="Product Name" className={classes.productImage} />
  //         </div>
  //         <div className={classes.productDetails}>
  //           <Link to="#">
  //             <Typography
  //               className={classes.productTitle}
  //               variant="h5"
  //             ></Typography>
  //           </Link>
  //           <Typography className={classes.productTimestamp} variant="body2">
  //             Updated 5hr ago
  //           </Typography>
  //         </div>
  //         <div>
  //           <IconButton>
  //             <MoreVertIcon />
  //           </IconButton>
  //         </div>
  //       </div>
  //     </Fragment>
  //   );
  // }

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
