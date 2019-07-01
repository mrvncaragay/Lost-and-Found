import React from "react";
import { postOrganization } from "../../../../../../actions/organizationActions";
import useInputState from "../../../../../../hooks/userInputState";
// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import {
  Grid,
  Input,
  Typography,
  TextField,
  IconButton,
  Tooltip
} from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import {
  Clear as Cancel,
  Done as Save,
  DeleteOutline,
  AddBox
} from "@material-ui/icons";

/// Component styles
import styles from "./styles";

function TableForm({ toggleForm, postOrganization, errors }) {
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
        <Grid item sm={12} className={classes.formControl}>
          <Tooltip title="Save">
            <IconButton>
              <Save />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cancel">
            <IconButton>
              <Cancel />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item sm={12} className={classes.formInput}>
          <Input
            value={values.name}
            onChange={e => handleChange("name", e)}
            placeholder="Name"
            className={classes.input}
            inputProps={{
              "aria-label": "Name"
            }}
          />

          <Input
            value={values.propertyCode}
            onChange={e => handleChange("propertyCode", e)}
            placeholder="Property Code"
            className={classes.input}
            inputProps={{
              "aria-label": "Property Code"
            }}
          />

          <Input
            value={values.address}
            onChange={e => handleChange("address", e)}
            placeholder="Address"
            className={classes.input}
            inputProps={{
              "aria-label": "Address"
            }}
          />
        </Grid>
      </Grid>
      {/* <Grid container className={classes.container}>
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
      </Grid> */}
    </div>
  );
}

TableForm.propTypes = {
  postOrganization: PropTypes.func.isRequired,
  errors: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { postOrganization }
)(TableForm);
