import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/currentUser";
import { DispatchContext } from "../../../contexts/currentUser";

// Material components
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

/// Component styles
import styles from "../styles";

// Input State
import useInputState from "../../../hooks/userInputState";

function AdminSignIn() {
  const classes = styles();
  const { dispatch, loggin } = useContext(DispatchContext);
  const { currentUser } = useContext(CurrentUserContext);

  const [values, handleChange, reset] = useInputState({
    userData: {
      email: "",
      password: ""
    }
  });

  console.log(currentUser);

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
                value={values.userData.email}
                className={classes.textField}
                onChange={e => handleChange("email", e)}
                label="Email address"
                name="email"
                type="text"
                variant="outlined"
              />

              <TextField
                error={values.error}
                value={values.userData.password}
                className={classes.textField}
                onChange={e => handleChange("password", e)}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
              />

              <FormHelperText className={classes.error}>
                {currentUser.error.message ? currentUser.error.message : ""}
              </FormHelperText>

              <Button
                //onClick={handleSubmit}
                onClick={e => {
                  loggin(values.userData);
                }}
                fullWidth
                className={classes.signInButton}
                color="primary"
                size="large"
                variant="contained"
              >
                Sign in
              </Button>

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

export default AdminSignIn;
