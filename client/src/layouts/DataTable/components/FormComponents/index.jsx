import React, { Fragment } from "react";

// Material Component
import { Input, NativeSelect, TableCell } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles(theme => ({
  selectItem: {
    minWidth: "90px"
  },
  tableCell: {
    whiteSpace: "nowrap"
  }
}));

export const TableItemCell = ({ data }) => {
  const classes = styles();
  return <TableCell className={classes.tableCell}>{data}</TableCell>;
};

export const ComponentItemInput = ({ state, objKey, handleChange }) => {
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

export const ComponentItemSelect = ({
  state,
  objKey,
  options,
  handleChange
}) => {
  const classes = styles();

  return (
    <NativeSelect
      className={classes.selectItem}
      value={state[objKey]}
      onChange={e => handleChange(objKey, e)}
    >
      {options.optionValue.map((value, index) => (
        <Fragment key={index}>
          <option value={value}>{value}</option>
        </Fragment>
      ))}
    </NativeSelect>
  );
};
