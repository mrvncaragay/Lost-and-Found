import React, { forwardRef } from "react";
import { Link, NavLink } from "react-router-dom";

// Externals
import classNames from "classnames";

// Material helpers
import { withStyles } from "@material-ui/core";

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography
} from "@material-ui/core";

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  ShoppingBasketOutlined as ShoppingBasketIcon,
  LockOpenOutlined as LockOpenIcon,
  TextFields as TextFieldsIcon,
  ImageOutlined as ImageIcon,
  InfoOutlined as InfoIcon,
  AccountBoxOutlined as AccountBoxIcon,
  SettingsOutlined as SettingsIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Sidebar({ classes, className }) {
  const rootClassName = classNames(classes.root, className);

  const myNavLink = forwardRef((props, ref) => {
    return <NavLink to={props.to} {...props} innerRef={ref} />;
  });

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link className={classes.logoLink} to="/">
          <img
            alt="Lost-and-Found logo"
            className={classes.image}
            src="/images/logos/lofo_logo.png"
          />
        </Link>
      </div>

      <Divider className={classes.logoDivider} />

      <div className={classes.profile}>
        <Link to="/account">
          <Avatar
            alt="Current User"
            className={classes.avatar}
            src="/images/avatars/default.png"
          />
        </Link>
        <Typography className={classes.nameText} variant="h6">
          Test User
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          Software Engineer
        </Typography>
      </div>

      <Divider className={classes.logoDivider} />

      <List component="div" disablePadding className={classes.mainList}>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={myNavLink}
          to="/dashboard"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <DashboardIcon />
          </ListItemIcon>

          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Dashboard"
          />
        </ListItem>

        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={myNavLink}
          to="/users"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>

          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="Users"
          />
        </ListItem>
      </List>
    </nav>
  );
}

export default withStyles(styles)(Sidebar);
