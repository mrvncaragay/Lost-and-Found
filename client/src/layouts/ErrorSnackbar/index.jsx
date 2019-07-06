import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { resetError } from "actions";

// Material helpers
import { makeStyles } from "@material-ui/core/styles";
import { Snackbar, SnackbarContent } from "@material-ui/core";

import ErrorIcon from "@material-ui/icons/Error";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
  error: {
    backgroundColor: theme.palette.error.dark
  },
  icon: {
    fontSize: 20,
    color: "black"
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center",
    color: "black"
  }
}));

function ErrorSnackbar({ message, resetError }) {
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
        className={classes.error}
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

ErrorSnackbar.propTypes = {
  resetError: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired
};

const myStateToProps = state => ({
  errors: state.errors
});

export default connect(
  myStateToProps,
  { resetError }
)(ErrorSnackbar);
