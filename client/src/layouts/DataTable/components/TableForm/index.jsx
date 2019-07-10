import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveForm } from "actions";

// Shared component
import { ComponentItemInput, ComponentItemSelect } from "../FormComponents";

// Helper function
import camelCase from "../../../../util/camelCaseStr";
import { userInputState } from "hooks";
import { isSelectInput, findOptions } from "../../../../util/validation";

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
import styles from "../styles";

function TableForm({ column, options, toggleTableForm, saveForm, form }) {
  const initValue = {
    password: ""
  };

  column.forEach(col => {
    initValue[camelCase(col)] = "";
  });

  const [state, handleChange, reset] = userInputState(initValue);

  const classes = styles();

  const handleSave = () => {
    const { saveFormFunc } = options;
    saveFormFunc ? saveFormFunc(state) : saveForm(state, form);

    reset();
    toggleTableForm(false);
  };

  const handleCancel = () => {
    toggleTableForm(false);
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

      {options.passwordField ? (
        <TableCell className={classes.tableCell}>
          <Input
            type="password"
            value={state.password}
            placeholder="Password"
            onChange={e => handleChange("password", e)}
            inputProps={{
              "aria-label": "password"
            }}
          />
        </TableCell>
      ) : null}

      <TableCell className={classes.tableCell}>
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
  saveForm: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  form: state.form
});

export default connect(
  mapStateToProps,
  { saveForm }
)(TableForm);
