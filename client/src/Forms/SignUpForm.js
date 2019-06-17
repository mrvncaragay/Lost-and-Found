import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    fontfamily: 'Montserrat'
  },

  form: {
    marginTop: 30,
    width: '80%'
  },

  button: {
    marginTop: '20px'
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

function SignUpForm() {
  const [values, setValues] = useState({
    adminType: ''
  });

  const classes = useStyles();

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submited');
  };

  return (
    <form className={classes.form}>
      <TextField
        required
        className={classes.textField}
        id="name-input"
        label="Name"
        type="name"
        autoComplete="current-Name"
        margin="dense"
        variant="outlined"
      />

      <TextField
        required
        className={classes.textField}
        id="email-input"
        label="Email"
        type="email"
        autoComplete="current-Email"
        margin="dense"
        variant="outlined"
      />

      <TextField
        required
        className={classes.textField}
        id="password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        margin="dense"
        variant="outlined"
      />

      <FormControl className={classes.formControl} required>
        <InputLabel htmlFor="adminType-input">Admin Type</InputLabel>
        <Select
          value={values.adminType}
          onChange={handleChange}
          inputProps={{
            name: 'adminType',
            id: 'adminType-input'
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="swAdmin">Software Admin</MenuItem>
          <MenuItem value="orgAdmin">Organization Admin</MenuItem>
          <MenuItem value="propAdmin">Property Admin</MenuItem>
        </Select>
      </FormControl>

      <TextField
        required
        className={classes.textField}
        id="propertyCode-input"
        label="Property Code"
        type="propertyCode"
        autoComplete="current-propertyCode"
        margin="dense"
        variant="outlined"
      />

      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Sign Up
      </Button>

      <NavLink exact className="active-link" to="/login">
        <Button fullWidth variant="outlined" color="secondary" className={classes.button}>
          Log In
        </Button>
      </NavLink>
    </form>
  );
}

export default SignUpForm;
