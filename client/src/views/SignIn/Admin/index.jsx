import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logInUser } from "../../../actions/authActions";

import setAuthJwtToken from "../../../util/setAuthJwtToken";
import jwt from "jsonwebtoken";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress
} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

/// Component styles
import styles from "../styles";

// Input State
import useInputState from "../../../hooks/userInputState";

function AdminSignIn({ logInUser, auth, errors, history }) {
  const classes = styles();

  const [values, handleChange, reset] = useInputState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    const userData = {
      email: values.email,
      password: values.password
    };

    logInUser(userData, history);
    reset();
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

              <FormHelperText className={classes.error}>
                {errors}
              </FormHelperText>

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

AdminSignIn.prototype = {
  logInUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { logInUser }
)(AdminSignIn);
