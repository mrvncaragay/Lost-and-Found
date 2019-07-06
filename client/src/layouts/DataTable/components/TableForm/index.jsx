import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { postOrganization } from "actions";

// Shared component
import { ComponentItemInput, ComponentItemSelect } from "../FormComponents";

// Helper function
import camelCase from "../../../../util/camelCaseStr";
import { userInputState } from "hooks";
import { isSelectInput, findOptions } from "../../../../util/validation";

// Material components
import { TableCell, TableRow, IconButton, Tooltip } from "@material-ui/core";

// Material icon components
import { Clear as Cancel, Done as Save } from "@material-ui/icons";

// Component stlyes
import styles from "../styles";

function TableForm({ column, options, toggleTableForm }) {
  const initValue = column.map(title => camelCase(title));

  const [state, handleChange, reset] = userInputState(initValue);

  const classes = styles();

  const handleSave = () => {
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
  postOrganization: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { postOrganization }
)(TableForm);
