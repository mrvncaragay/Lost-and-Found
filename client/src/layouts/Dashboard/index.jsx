import React, { useState, Fragment } from 'react';

// Externals
import classNames from 'classnames';

// Material helpers
import { withStyles, withWidth } from '@material-ui/core';

// Material components
import { Drawer } from '@material-ui/core';

// Custom components
import { Topbar, Sidebar } from './components';

// Component styles
import styles from './styles';

function Dashboard({classes, title}) {

  const [isOpen, setIsOpen] = useState(false);

  const shiftTopbar = isOpen; //&& !isMobile;
  const shiftContent = isOpen; //&& !isMobile;

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen({ isOpen: false });
  };

  return (
    <Fragment>
      <Topbar 
        className={classNames(classes.topbar, {  [classes.topbarShift]: shiftTopbar })}
        isSideBarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
        title={title}
      />

        <Drawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          onClose={handleClose}
          open={isOpen}
          variant={'persistent'}//{isMobile ? 'temporary' : 'persistent'}
        >
          <Sidebar className={classes.sidebar} />
        </Drawer> 

        <main 
            className={classNames(classes.content, { [classes.contentShift]: shiftContent })} >
        </main>
    </Fragment>
  );
}

export default withStyles(styles)(Dashboard);
