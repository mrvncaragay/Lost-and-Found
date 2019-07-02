import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateUser } from "actions";
import { userInputState } from "hooks";

// Material components
import {
  TableCell,
  TableRow,
  IconButton,
  Tooltip,
  Input,
  NativeSelect
} from "@material-ui/core";

// Material icon components
import { Clear as Cancel, Done as Save } from "@material-ui/icons";

// Component stlyes
import styles from "./styles";

function EditItem({ data, toggleEdit, updateUser }) {
  const initValue = {
    ...data
  };
  const [state, handleChange] = userInputState(initValue);

  const classes = styles();

  const handleSave = id => {
    updateUser({ ...state, id: id });
  };

  const handleCancel = () => {
    toggleEdit(false);
  };

  return (
    <TableRow hover>
      <TableCell className={classes.tableCell}>
        <Input
          value={state.name}
          onChange={e => handleChange("name", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
      </TableCell>

      <TableCell className={classes.tableCell}>{state.email}</TableCell>

      <TableCell className={classes.tableCell}>
        <Input
          value={state.propertyCode}
          onChange={e => handleChange("propertyCode", e)}
          inputProps={{
            "aria-label": "PropertyCode"
          }}
        />
      </TableCell>

      <TableCell className={classes.tableCell}>
        <NativeSelect
          className={classes.selectItem}
          value={state.adminType}
          onChange={e => handleChange("adminType", e)}
        >
          <option value="propAdmin">propAdmin</option>
          <option value="orgAdmin">orgAdmin</option>
          <option value="swAdmin">swAdmin</option>
        </NativeSelect>
      </TableCell>

      <TableCell className={classes.tableCell}>
        <NativeSelect
          className={classes.selectItem}
          value={state.status}
          onChange={e => handleChange("status", e)}
        >
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </NativeSelect>
      </TableCell>

      <TableCell>
        <Tooltip title="Save">
          <IconButton onClick={() => handleSave(state._id)}>
            <Save />
          </IconButton>
        </Tooltip>

        <Tooltip title="Cancel">
          <IconButton onClick={handleCancel}>
            <Cancel />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}

EditItem.propTypes = {
  updateUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { updateUser }
)(EditItem);
