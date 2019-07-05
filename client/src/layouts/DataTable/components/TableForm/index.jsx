import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postOrganization } from "actions";
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

function TableForm({ postOrganization, toggleTableForm }) {
  const initValue = {
    name: "",
    propertyCode: "",
    address: ""
  };
  const [state, handleChange, reset] = userInputState(initValue);

  const classes = styles();

  const handleSave = () => {
    postOrganization({ ...state });
    reset();
    toggleTableForm(false);
  };

  const handleCancel = () => {
    toggleTableForm(false);
  };

  return (
    <TableRow hover>
      <TableCell className={classes.tableCell}>
        <Input
          value={state.name}
          placeholder="Name"
          onChange={e => handleChange("name", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
      </TableCell>

      <TableCell className={classes.tableCell}>
        <Input
          value={state.propertyCode}
          placeholder="Property Code"
          onChange={e => handleChange("propertyCode", e)}
          inputProps={{
            "aria-label": "Name"
          }}
        />
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Input
          value={state.address}
          placeholder="Address"
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

TableForm.propTypes = {
  postOrganization: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postOrganization }
)(TableForm);
