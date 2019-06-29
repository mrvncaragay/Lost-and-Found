import React from "react";
import { postOrganization } from "../../../../actions/organizationActions";
import useInputState from "../../../../hooks/userInputState";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";

/// Component styles
import styles from "./styles";

function OrganizationalForm({ toggleForm, postOrganization, errors }) {
  const classes = styles();
  const [values, handleChange, reset] = useInputState({
    name: "",
    propertyCode: "",
    address: ""
  });

  const handleSubmit = () => {
    postOrganization(values);
  };

  return (
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item className={classes.contentBody} lg={4} md={4} xs={12}>
          <div className={classes.mainForm}>
            <div className={classes.formHeader}>
              <Typography variant="h4">Register Form</Typography>
            </div>

            <form className={classes.form}>
              <TextField
                className={classes.textField}
                value={values.name}
                onChange={e => handleChange("name", e)}
                label="Name"
                name="name"
                type="text"
                variant="outlined"
              />

              <TextField
                className={classes.textField}
                value={values.propertyCode}
                onChange={e => handleChange("propertyCode", e)}
                label="Property Code"
                name="propertyCode"
                type="text"
                variant="outlined"
              />

              <TextField
                className={classes.textField}
                value={values.address}
                onChange={e => handleChange("address", e)}
                label="Address"
                name="address"
                type="text"
                variant="outlined"
              />

              <FormHelperText className={classes.error}>
                {errors}
              </FormHelperText>

              <div className={classes.btnContainer}>
                <Button
                  onClick={toggleForm}
                  className={classes.signInButton}
                  color="default"
                  size="small"
                  variant="outlined"
                >
                  cancel
                </Button>
                <Button
                  onClick={handleSubmit}
                  className={classes.signInButton}
                  color="primary"
                  size="small"
                  variant="outlined"
                >
                  Save
                </Button>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

OrganizationalForm.propTypes = {
  postOrganization: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { postOrganization }
)(OrganizationalForm);
