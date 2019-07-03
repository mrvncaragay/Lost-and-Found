import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUsers } from "actions";

import {
  Toolbar,
  Tooltip,
  Typography,
  IconButton,
  Input,
  InputBase
} from "@material-ui/core";

import { Search, AddBox, Clear } from "@material-ui/icons";

// Components
import { ItemForm } from "../../components";

// Component styles
import styles from "./styles";

function TableToolbar({ searchOrganizations, title }) {
  const [disableSearch, setDisableSearch] = useState(true);
  const [searchParams, setsearchParams] = useState("");
  const [isAddItem, setAddItem] = useState(false);
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
    setAddItem(true);
  };

  return (
    <div>
      {isAddItem ? <ItemForm toggleAddItem={setAddItem} /> : null}
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
              placeholder="Search user"
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
    </div>
  );
}

TableToolbar.propTypes = {
  searchUsers: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { searchUsers }
)(TableToolbar);
