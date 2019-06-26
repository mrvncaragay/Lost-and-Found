import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../../contexts/currentUser";
import { DispatchContext } from "../../../contexts/currentUser";
import {
  submitError,
  submitStarted,
  setCurrentUser
} from "../../../actions/authActions";
import setAuthJwtToken from "../../../util/setAuthJwtToken";
import jwt from "jsonwebtoken";
// External
import axios from "axios";

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

function AdminSignIn({ history }) {
  const classes = styles();
  const dispatch = useContext(DispatchContext);
  const currentUser = useContext(CurrentUserContext);

  const [values, handleChange, reset] = useInputState({
    email: "",
    password: ""
  });

  const handleSubmit = () => {
    dispatch(submitStarted());

    axios
      .post("/api/auth", {
        email: values.email,
        password: values.password
      })
      .then(res => {
        localStorage.setItem("x-auth-token", res.data);
        setAuthJwtToken(res.data);
        const decoded = jwt.verify(res.data, process.env.REACT_APP_JWT);
        dispatch(setCurrentUser(decoded));
        history.push("/dashboard");
      })
      .catch(err => {
        reset();
        dispatch(submitError(err.response.data));
      });
  };

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
                {currentUser.errorMessage ? currentUser.errorMessage : ""}
              </FormHelperText>

              {currentUser.loading ? (
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

export default AdminSignIn;
