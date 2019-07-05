import React from "react";

// Material Component
import { Input, NativeSelect } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  tableCell: {
    whiteSpace: "nowrap"
  }
}));

export const ComponentItemInput = ({ state, objKey, handleChange }) => {
  const classes = styles();

  return (
    <Input
      value={state[objKey]}
      onChange={e => handleChange(objKey, e)}
      inputProps={{
        "aria-label": objKey
      }}
    />
  );
};

export const ComponentItemSelect = ({ state, objKey, handleChange }) => {
  const classes = styles();

  return (
    <NativeSelect
      className={classes.selectItem}
      value={state[objKey]}
      onChange={e => handleChange("adminType", e)}
    >
      <option value="propAdmin">propAdmin</option>
      <option value="orgAdmin">orgAdmin</option>
      <option value="swAdmin">swAdmin</option>
    </NativeSelect>
  );
};
