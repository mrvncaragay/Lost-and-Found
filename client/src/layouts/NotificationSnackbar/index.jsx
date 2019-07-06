import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetError } from "actions";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";
import { green } from "@material-ui/core/colors";

import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold"
  }
}));

function NotificationSnackbar({ message, resetError, type }) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleExit = () => {
    resetError();
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}
      open={open}
      autoHideDuration={5000}
      onClose={handleClose}
      onExited={handleExit}
    >
      <SnackbarContent
        className={classes[`${type}`]}
        aria-describedby="error-snackbar"
        message={
          <span className={classes.message}>
            <ErrorIcon className={`${classes.icon}  ${classes.iconVariant}`} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
}

NotificationSnackbar.propTypes = {
  resetError: PropTypes.func.isRequired
};

const myStateToProps = state => ({});

export default connect(
  myStateToProps,
  { resetError }
)(NotificationSnackbar);
