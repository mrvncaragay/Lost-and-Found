import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// Material components
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

/// Component styles
import styles from "../styles";

// Input State
import useInputState from "../../../hooks/userInputState";

function AdminSignUp({ history }) {
  const classes = styles();

  const [values, handleChange, reset] = useInputState({
    name: "",
    email: "",
    password: "",
    adminType: "",
    error: false,
    errorType: "",
    errorMessage: ""
  });

  const handleSubmit = () => {
    axios
      .post("/api/users", {
        name: values.name,
        email: values.email,
        password: values.password,
        adminType: values.adminType
      })
      .then(res => {
        reset();
        history.push("/admin/sign-in");
      })
      .catch(err => handleChange("error", err.response.data));
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
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
                value={values.name}
                className={classes.textField}
                onChange={e => handleChange("name", e)}
                label="Name"
                name="name"
                type="text"
                variant="outlined"
              />

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

              <InputLabel
                className={classes.textField}
                htmlFor="adminType-helper"
              >
                Admin Type
              </InputLabel>
              <Select
                value={values.adminType}
                onChange={e => handleChange("adminType", e)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"propAdmin"}>propAdmin</MenuItem>
                <MenuItem value={"orgAdmin"}>orgAdmin</MenuItem>
                <MenuItem value={"swAdmin"}>swAdmin</MenuItem>
              </Select>

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
                Register
              </Button>

              <Typography className={classes.signUp} variant="body1">
                Have an admin account?{" "}
                <Link className={classes.signUpUrl} to="/admin/sign-in">
                  Sign In
                </Link>
              </Typography>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default AdminSignUp;
