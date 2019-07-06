import React from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../../actions/authActions";

// Shared components
import { NotificationSnackbar } from "layouts";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useInputState from "../../../hooks/userInputState";

// Material components
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";

/// Component styles
import styles from "../styles";

function AdminSignIn({ logInUser, auth, notify, history }) {
  const classes = styles();

  const [values, handleChange] = useInputState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password
    };
    logInUser(userData, history);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.grid}>
        <Grid item className={classes.contentBody} lg={4} xs={11}>
          <div className={classes.mainForm}>
            <div className={classes.formHeader}>
              <Link to="/">
                <img
                  alt="Lost-and-Found logo"
                  className={classes.image}
                  src="/images/logos/lofo_logo.png"
                />
              </Link>
            </div>

            <form className={classes.form}>
              <TextField
                error={values.error}
                value={values.email}
                className={classes.textField}
                onChange={e => handleChange("email", e)}
                label="Email address"
                name="email"
                type="text"
                variant="outlined"
              />

              <TextField
                error={values.error}
                value={values.password}
                className={classes.textField}
                onChange={e => handleChange("password", e)}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
              />

              {notify ? (
                <NotificationSnackbar
                  message={notify.message}
                  type={notify.type}
                />
              ) : null}

              {false ? (
                // loading icon need to fix
                <CircularProgress className={classes.progress} />
              ) : (
                <Button
                  onClick={handleSubmit}
                  fullWidth
                  className={classes.signInButton}
                  color="primary"
                  size="large"
                  variant="contained"
                >
                  Sign in
                </Button>
              )}

              <Typography className={classes.signUp} variant="body1">
                don't have an admin account?{" "}
                <Link className={classes.signUpUrl} to="/admin/sign-up">
                  Sign up
                </Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

AdminSignIn.propTypes = {
  logInUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  notify: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth,
  notify: state.notify
});

export default connect(
  mapStateToProps,
  { logInUser }
)(AdminSignIn);
