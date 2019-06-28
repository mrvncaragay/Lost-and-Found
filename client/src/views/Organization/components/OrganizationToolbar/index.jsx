import React, { Fragment } from "react";

// Material components
import { Button, InputBase, IconButton, Paper } from "@material-ui/core";
// Material icons
import { Search as SearchIcon } from "@material-ui/icons";

// Styles
import styles from "./style";

function OrganizationToolbar() {
  const classes = styles();

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper className={classes.search}>
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.searchInput}
            placeholder="Search organization"
          />
        </Paper>
        <span className={classes.spacer} />
        <Button color="primary" size="small" variant="outlined">
          Add
        </Button>
      </div>
    </Fragment>
  );
}

export default OrganizationToolbar;
