import React from "react";
import { Link } from "react-router-dom";

// Material components
import {
  Grid,
  Typography,
  TextField,
  Button,
  Divider
} from "@material-ui/core";

/// Component styles
import styles from "../styles";

function SignIn() {
  const classes = styles();

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
                className={classes.textField}
                label="Property Code"
                name="propertyCode"
                type="text"
                variant="outlined"
              />

              <TextField
                className={classes.textField}
                label="Email address"
                name="email"
                type="text"
                variant="outlined"
              />

              <TextField
                className={classes.textField}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
              />

              <Button
                fullWidth
                className={classes.signInButton}
                color="primary"
                size="large"
                variant="contained"
              >
                Sign in
              </Button>

              <Typography className={classes.signUp} variant="body1">
                Don't have an account?{" "}
                <Link className={classes.signUpUrl} to="/sign-up">
                  Sign up
                </Link>
              </Typography>

              <Typography className={classes.adminLink} variant="body1">
                Have an admin account?{" "}
                <Link className={classes.signUpUrl} to="/admin/sign-in">
                  Sign in
                </Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignIn;
