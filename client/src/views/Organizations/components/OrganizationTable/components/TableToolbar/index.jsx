import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchOrganizations } from "actions";

import {
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
  InputBase
} from "@material-ui/core";

import { Search, AddBox, Clear } from "@material-ui/icons";

// Component styles
import styles from "./styles";

function TableToolbar({
  searchOrganizations,
  title,
  organizations,
  toggleAddItem
}) {
  const [disableSearch, setDisableSearch] = useState(true);
  const [searchParams, setsearchParams] = useState("");
  const classes = styles();

  const handleSearch = e => {
    e.target.value ? setDisableSearch(false) : setDisableSearch(true);
    setsearchParams(e.target.value);
  };

  const handleClear = e => {
    setsearchParams("");
    setDisableSearch(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    searchOrganizations(searchParams);
    setsearchParams("");
    setDisableSearch(true);
  };

  const handleAdd = () => {
    toggleAddItem(true);
  };

  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h5" id="tableTitle">
          {title}
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.searchWrapper}>
        <Search className={classes.iconButton} />
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <InputBase
            onChange={handleSearch}
            value={searchParams}
            className={classes.searchInput}
            placeholder="Search organization"
          />
        </form>

        <IconButton
          onClick={handleClear}
          disabled={disableSearch}
          className={classes.iconButton}
          aria-label="Search"
        >
          <Clear />
        </IconButton>
      </div>
      <Tooltip title="Add">
        <IconButton onClick={handleAdd} color="primary" aria-label="Add user">
          <AddBox />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  searchOrganizations: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { searchOrganizations }
)(TableToolbar);
