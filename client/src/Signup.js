import React from 'react';
import SignUpForm from './Forms/SignUpForm';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '450px'
  }
}));
function SignUp() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={10} md={4} lg={4}>
        <Paper className={classes.paper}>
          <SignUpForm />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default SignUp;
