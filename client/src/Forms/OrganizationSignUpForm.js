import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
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
  }
}));

function OrganizationSignUpForm() {
  const classes = useStyles();

  const alertMe = () => {
    alert('clicked');
  };
  return (
    <form className={classes.form}>
      <TextField
        className={classes.textField}
        id="organizationCode-input"
        label="Organization Code"
        type="OrganizationCode"
        autoComplete="current-OrganizationCode"
        margin="dense"
        variant="outlined"
      />

      <TextField
        className={classes.textField}
        id="name-input"
        label="Organization Name"
        type="name"
        autoComplete="current-name"
        margin="dense"
        variant="outlined"
      />

      <TextField
        className={classes.textField}
        id="address-input"
        label="Organization Address"
        type="Address"
        autoComplete="current-Address"
        margin="dense"
        variant="outlined"
      />

      <Button
        onClick={alertMe}
        fullWidth
        variant="outlined"
        color="primary"
        className={classes.button}
      >
        Log In
      </Button>

      <NavLink exact className="active-link" to="/signup">
        <Button fullWidth variant="outlined" color="secondary" className={classes.button}>
          Sign up
        </Button>
      </NavLink>
    </form>
  );
}

export default OrganizationSignUpForm;
