import React, { forwardRef, Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import { isPropAdmin, isSecurityAdmin } from "util/validation";

// Externals
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from "@material-ui/core";

// Material icons
import {
  DashboardOutlined as DashboardIcon,
  PeopleOutlined as PeopleIcon,
  FeedbackOutlined as InqueriesIcon,
  AssignmentTurnedInOutlined as FoundIcon,
  WarningOutlined as LostIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Sidebar({ user }) {
  const classes = styles();

  const myNavLink = forwardRef((props, ref) => {
    return <NavLink to={props.to} {...props} innerRef={ref} />;
  });

  return (
    <nav className={classes.root}>
      <div className={classes.logoWrapper}>
        <img
          alt="Lost-and-Found logo"
          className={classes.image}
          src="/images/logos/lofo_logo.png"
        />
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
          {user.name}
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          {user.propertyCode}
        </Typography>
        <Typography className={classes.bioText} variant="caption">
          {user.adminType}
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

        {isPropAdmin(user.adminType) || isSecurityAdmin(user.adminType) ? (
          <Fragment>
            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={myNavLink}
              to="/lost"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <LostIcon />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="lost"
              />
            </ListItem>

            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={myNavLink}
              to="/found"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <FoundIcon />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="found"
              />
            </ListItem>

            <ListItem
              activeClassName={classes.activeListItem}
              className={classes.listItem}
              component={myNavLink}
              to="/inquiry"
            >
              <ListItemIcon className={classes.listItemIcon}>
                <InqueriesIcon />
              </ListItemIcon>

              <ListItemText
                classes={{ primary: classes.listItemText }}
                primary="Inquiry"
              />
            </ListItem>
          </Fragment>
        ) : null}

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

Sidebar.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Sidebar);
