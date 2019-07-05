import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateOrganization } from "actions";
import { userInputState } from "hooks";

// Material components
import {
  TableCell,
  TableRow,
  IconButton,
  Tooltip,
  Input
} from "@material-ui/core";

// Material icon components
import { Clear as Cancel, Done as Save } from "@material-ui/icons";

// Component stlyes
import styles from "./styles";

function TableEditRow({ data, toggleEdit, updateOrganization }) {
  const initValue = {
    ...data
  };
  const [state, handleChange] = userInputState(initValue);

  const classes = styles();

  const handleSave = id => {
    updateOrganization({ ...state, id: id });
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

      <TableCell className={classes.tableCell}>
        <Input
          value={state.propertyCode}
          onChange={e => handleChange("propertyCode", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Input
          value={state.address}
          onChange={e => handleChange("address", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
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

TableEditRow.propTypes = {
  updateOrganization: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { updateOrganization }
)(TableEditRow);
