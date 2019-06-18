import React, { Fragment } from 'react'
import { withStyles, withWidth } from '@material-ui/core';

// Externals
import classNames from 'classnames';

// Material components
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography
} from '@material-ui/core';

// Material icons
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon
} from '@material-ui/icons';

// Component styles
import styles from './styles';

function Topbar({classes, className, title, isSideBarOpen, onToggleSidebar}) {

  const rootClassName = classNames(classes.root, className)
  return(
    
    <Fragment> 
        <div className={rootClassName}>
          <Toolbar className={classes.toolbar}>

            <IconButton 
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
            >
              { isSideBarOpen ? <CloseIcon /> : <MenuIcon />  }
                    
            </IconButton>
            <Typography className={classes.title} variant="h4" >
              {title}
            </Typography>

            <IconButton className={classes.signOutButton}>
              <InputIcon />
            </IconButton>

          </Toolbar>
        </div>
    </Fragment>
  )
};

export default withStyles(styles)(Topbar);