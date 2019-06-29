import React, { useState, Fragment } from "react";
import { searchOrganizations } from "../../../../actions/organizationsActions";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Material components
import {
  Button,
  InputBase,
  IconButton,
  Paper,
  Popover,
  TextField
} from "@material-ui/core";

// Material icons
import { Search as SearchIcon } from "@material-ui/icons";

// Styles
import styles from "./style";

function OrganizationToolbar({ toggleForm, isFormOpen, searchOrganizations }) {
  const classes = styles();
  const [params, setParams] = useState("");

  const handleSearch = () => {
    if (params) {
      searchOrganizations(params);
    }
  };

  const handleChange = e => {
    setParams(e.target.value);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Paper className={classes.search}>
          <IconButton className={classes.iconButton} aria-label="Search">
            <SearchIcon />
          </IconButton>
          <InputBase
            value={params}
            onChange={handleChange}
            className={classes.searchInput}
            placeholder="Search organization"
          />
        </Paper>
        <Button onClick={handleSearch} size="small" variant="outlined">
          Search
        </Button>
        <span className={classes.spacer} />
        {isFormOpen ? (
          <Button
            color="primary"
            size="small"
            variant="outlined"
            onClick={toggleForm}
          >
            Add
          </Button>
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
}

OrganizationToolbar.propTypes = {
  searchOrganizations: PropTypes.func.isRequired
};

export default connect(
  null,
  { searchOrganizations }
)(OrganizationToolbar);
