import React, { useState } from "react";

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
  data,
  setDataTable,
  title,
  toggleTableForm,
  addButton = true,
  addButtonSetForm = null
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

    setDataTable(
      data.filter(data => {
        return (
          data.name.toLowerCase().indexOf(searchParams.toLowerCase()) !== -1
        );
      })
    );
    setsearchParams("");
    setDisableSearch(true);
  };

  const handleAdd = () => {
    if (addButtonSetForm) addButtonSetForm("post");

    toggleTableForm(true);
  };

  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="h5">{title}</Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.searchWrapper}>
        <Search className={classes.iconButton} />
        <form className={classes.searchForm} onSubmit={handleSubmit}>
          <InputBase
            onChange={handleSearch}
            value={searchParams}
            className={classes.searchInput}
            placeholder={`Search ${title}`}
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
      {addButton ? (
        <Tooltip title={`Add ${title}`}>
          <IconButton
            onClick={handleAdd}
            color="primary"
            aria-label={`Add ${title}`}
          >
            <AddBox />
          </IconButton>
        </Tooltip>
      ) : null}
    </Toolbar>
  );
}

export default TableToolbar;
