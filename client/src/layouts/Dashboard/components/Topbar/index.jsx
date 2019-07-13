import React, { useState, Fragment } from "react";
import { logOutUser } from "actions/authActions";
import { isSecurityAdmin, isPropAdmin } from "util/validation";

// Shared components
import { Lost, Found, Inquiry } from "layouts";

// Externals
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import {
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Button
} from "@material-ui/core";

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Input as InputIcon,
  AddOutlined as AddIcon
} from "@material-ui/icons";

// Component styles
import styles from "./styles";

function Topbar({
  logOutUser,
  className,
  title,
  isSideBarOpen,
  onToggleSidebar,
  user
}) {
  const classes = styles();
  const [toggle, setToggle] = useState(false);
  const [form, setForm] = useState();

  const handleLogOut = e => {
    e.preventDefault();
    logOutUser();
  };

  const handleForm = type => {
    console.log(type);
    if (form === type) return setToggle(!toggle);

    setForm(type);
    setToggle(!toggle);
    setToggle(true);
  };

  return (
    <Fragment>
      {form === "Lost" ? <Lost toggle={toggle} setToggle={setToggle} /> : null}
      {form === "Found" ? (
        <Found toggle={toggle} setToggle={setToggle} />
      ) : null}
      {form === "Inquiry" ? (
        <Inquiry toggle={toggle} setToggle={setToggle} />
      ) : null}

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

          {isPropAdmin(user.adminType) || isSecurityAdmin(user.adminType) ? (
            <Fragment>
              <Tooltip title="Report Lost Item" placement="bottom">
                <Button
                  onClick={() => handleForm("Lost")}
                  variant="outlined"
                  size="small"
                  color="primary"
                  className={classes.addButtons}
                >
                  <AddIcon className={classes.addSVG} />
                  Lost
                </Button>
              </Tooltip>

              <Tooltip title="Report Found Item" placement="bottom">
                <Button
                  onClick={() => handleForm("Found")}
                  variant="outlined"
                  size="small"
                  className={classes.addButtons}
                >
                  <AddIcon className={classes.addSVG} />
                  Found
                </Button>
              </Tooltip>

              <Tooltip title="Report an Inquiry" placement="bottom">
                <Button
                  onClick={() => handleForm("Inquiry")}
                  variant="outlined"
                  size="small"
                  color="secondary"
                  className={classes.addButtons}
                >
                  <AddIcon className={classes.addSVG} />
                  Inquiry
                </Button>
              </Tooltip>
            </Fragment>
          ) : null}

          <Tooltip title="Logout" placement="bottom">
            <IconButton
              className={classes.signOutButton}
              onClick={handleLogOut}
            >
              <InputIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </div>
    </Fragment>
  );
}

Topbar.propTypes = {
  logOutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { logOutUser }
)(Topbar);
