import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Material components
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

/// Component styles
import styles from "../styles";

// Input State
import useInputState from "../../../hooks/userInputState";

function AdminSignIn({ history }) {
  const classes = styles();

  const [values, handleChange, reset] = useInputState({
    email: "",
    password: "",
    error: false,
    errorType: "",
    errorMessage: ""
  });

  const handleSubmit = async () => {
    axios
      .post("/api/auth", {
        email: values.email,
        password: values.password
      })
      .then(res => {
        localStorage.setItem("x-auth-token", res.data);
        history.push("/dashboard");
      })
      .catch(err => handleChange("error", err.response.data));
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
                {values.error ? values.errorMessage : ""}
              </FormHelperText>

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

              <Typography className={classes.signUp} variant="body1">
                Not an admin account?{" "}
                <Link className={classes.signUpUrl} to="/sign-in">
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

export default AdminSignIn;
