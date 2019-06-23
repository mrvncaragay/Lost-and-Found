import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Link from '@material-ui/core/Link';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Component styles
import styles from './styles';

function Navbar({classes, className}) {
 
    const rootClassName = classNames(classes.root, className)
    
    return(
        <div className={rootClassName} >
            <AppBar elevation={0} className={classes.appbar} position="fixed" color="default">
               <Toolbar className={classes.toolbar}>
                    <div className={classes.left} />

                    <Link to="/">
                        <img alt="Lost-and-Found logo"
                        className={classes.image}
                        src="/images/logos/lofo_logo.png" />        
                    </Link>

                    <div className={classes.right}>
                        <NavLink exact to="#">
                            {'Sign In'}
                        </NavLink>
                        {/* dont use it not a  react link */}
                        <NavLink  href="/dashboard" className={classes.rightLink} variant="h6" underline="none" exact to="#">
                            {'Sign Up'}
                        </NavLink>
                    </div>

               </Toolbar>
            </AppBar>
        </div>


    );
};

export default withStyles(styles)(Navbar);