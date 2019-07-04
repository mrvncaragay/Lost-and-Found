import React, { Fragment } from "react";

// Material Component
import {
  Fade,
  Paper,
  Popper,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";

// Material icons
import { AddBox } from "@material-ui/icons";

// Material helper
import { makeStyles } from "@material-ui/core/styles";

import AdminSignIn from "../../../SignIn/Admin/";

const useStyles = makeStyles(theme => ({
  root: {
    width: 500
  },
  typography: {
    padding: theme.spacing(2)
  },
  box: {
    zIndex: 999
  }
}));

function PropertyForm() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => event => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  return (
    <Fragment>
      <IconButton color="primary" onClick={handleClick("left")}>
        <AddBox />
      </IconButton>
      <Popper
        className={classes.box}
        open={open}
        anchorEl={anchorEl}
        placement="left"
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
              <AdminSignIn />
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
}

export default PropertyForm;
