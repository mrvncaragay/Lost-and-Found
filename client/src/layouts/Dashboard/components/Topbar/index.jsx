import React, { Fragment } from "react";
import { logOutUser } from "../../../../actions/authActions";

// Externals
import classNames from "classnames";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import { IconButton, Toolbar, Typography } from "@material-ui/core";

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Input as InputIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Topbar({
  logOutUser,
  className,
  title,
  isSideBarOpen,
  onToggleSidebar
}) {
  const classes = styles();

  const handleLogOut = e => {
    e.preventDefault();
    logOutUser();
  };

  return (
    <Fragment>
      <div className={`${classes.root} ${className}`}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
          >
            {isSideBarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography className={classes.title} variant="h4">
            {title}
          </Typography>

          <IconButton className={classes.signOutButton} onClick={handleLogOut}>
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
    </Fragment>
  );
}

Topbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Topbar);
