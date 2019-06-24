import React from "react";
import { Link, NavLink } from "react-router-dom";

// Material components
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

// Externals
import classNames from "classnames";

// Component styles
import styles from "./styles";

function Navbar() {
  const classes = styles();

  return (
    <AppBar
      elevation={0}
      className={classes.appbar}
      position="fixed"
      color="default"
    >
      <Toolbar className={classes.toolbar}>
        <div className={classes.left}>
          <Link to="/">
            <img
              alt="Lost-and-Found logo"
              className={classes.image}
              src="/images/logos/lofo_logo.png"
            />
          </Link>
        </div>

        <div className={classes.right}>
          <Button size="small" color="primary">
            <NavLink exact to="/sign-in" className={classes.login}>
              Sign in
            </NavLink>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
