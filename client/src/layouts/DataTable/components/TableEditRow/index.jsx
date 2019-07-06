import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveForm } from "actions";
import { userInputState } from "hooks";

// Helper function
import camelCase from "../../../../util/camelCaseStr";
import { isSelectInput, findOptions } from "../../../../util/validation";

// Shared component
import { ComponentItemInput, ComponentItemSelect } from "../FormComponents";

// Material components
import { TableCell, TableRow, IconButton, Tooltip } from "@material-ui/core";

// Material icon components
import { Clear as Cancel, Done as Save } from "@material-ui/icons";

// Component stlyes
import styles from "../styles";

function TableEditRow({ data, column, options, toggleEdit, saveForm, form }) {
  const initValue = {
    ...data
  };
  const [state, handleChange, reset] = userInputState(initValue);

  const classes = styles();

  const handleSave = () => {
    saveForm({ ...state }, form);
    reset();
    toggleEdit(false);
  };

  const handleCancel = () => {
    toggleEdit(false);
  };

  return (
    <TableRow hover>
      {column.map((title, index) => (
        <Fragment key={index}>
          <TableCell className={classes.tableCell}>
            {isSelectInput(title, options) ? (
              <ComponentItemSelect
                state={state}
                objKey={camelCase(title)}
                options={findOptions(title, options)}
                handleChange={handleChange}
              />
            ) : (
              <ComponentItemInput
                state={state}
                objKey={camelCase(title)}
                handleChange={handleChange}
              />
            )}
          </TableCell>
        </Fragment>
      ))}

      <TableCell className={classes.tableCell}>
        <Tooltip title="Save">
          <IconButton onClick={handleSave}>
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
  saveForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  { saveForm }
)(TableEditRow);
