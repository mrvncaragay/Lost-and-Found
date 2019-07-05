import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateOrganization } from "actions";
import { userInputState } from "hooks";

// Helper function
import camelCase from "../../../../util/camelCaseStr";
import { isSelectable } from "../../../../util/validation";

// Shared component
import { ComponentItemInput, ComponentItemSelect } from "./ComponentItem";

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

function TableEditRow({
  data,
  column,
  options,
  toggleEdit,
  updateOrganization
}) {
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

  const newMap = column.map();

  const copyArr = ["Name", "Email", "Property Code"];
  const copyArr2 = ["Admin Type", "Status"];

  return (
    <TableRow hover>
      {copyArr.map((title, index) => (
        <Fragment key={index}>
          <TableCell className={classes.tableCell}>
            <ComponentItemInput
              state={state}
              objKey={camelCase(title)}
              handleChange={handleChange}
            />
          </TableCell>
        </Fragment>
      ))}

      {copyArr2.map((title, index) => (
        <Fragment key={index}>
          <TableCell className={classes.tableCell}>
            <ComponentItemSelect
              state={state}
              objKey={camelCase(title)}
              handleChange={handleChange}
            />
          </TableCell>
        </Fragment>
      ))}

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
