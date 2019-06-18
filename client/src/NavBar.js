import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import './css/NavBar.scss';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: `${theme.palette.common.white}`
  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: 'Montserrat'
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textTransform: 'capitalize',
    fontFamily: 'Montserrat',
    padding: '5px'
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Lost and Found
          </Typography>

          <NavLink exact className="active-link" to="/prop-signup">
            <Button size="small" color="primary" variant="outlined" className={classes.link}>
              Register Property
            </Button>
          </NavLink>

          <NavLink exact className="active-link" to="/org-signup">
            <Button size="small" color="primary" variant="outlined" className={classes.link}>
              Register organization
            </Button>
          </NavLink>

          <NavLink exact className="active-link" to="/signup">
            <Button size="small" color="primary" variant="outlined" className={classes.link}>
              Register user
            </Button>
          </NavLink>

          <NavLink exact className="active-link" to="/login">
            <Button variant="outlined" size="small" color="primary" className={classes.link}>
              Log in
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default NavBar;
