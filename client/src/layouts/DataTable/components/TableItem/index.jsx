import React, { useState, Fragment } from "react";
import { setCurrentOrganization } from "actions";
import { Link } from "react-router-dom";
import { isSwAdmin } from "util/validation";

// External
import { connect } from "react-redux";
import PropTypes from "prop-types";

// Helper function
import camelCase from "util/camelCaseStr";
import { isColumnLink } from "util/validation";
import urlSanitizer from "util/urlSanitizer";

// Shared Component
import { TableItemCell } from "../FormComponents";
import TableEditRow from "../TableEditRow";

// Material components
import {
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";

// Material icon components
import { Edit, DomainDisabledOutlined as DomainIcon } from "@material-ui/icons";

import styles from "./styles";

function TableItem({ data, column, options, setCurrentOrganization }) {
  const [isEditing, toggleEdit] = useState(false);

  const classes = styles();

  const handleEdit = () => {
    if (options.addButtonSetForm) options.addButtonSetForm("edit");

    toggleEdit(!isEditing);
  };

  const handleDisabled = () => {};

  //console.log("TODO RE_RENDER", data.name);

  const handleLinkClick = () => {
    setCurrentOrganization(data);
  };

  return isEditing ? (
    <TableEditRow
      data={data}
      column={column}
      toggleEdit={toggleEdit}
      options={options}
    />
  ) : (
    <TableRow className={classes.tableRow} hover>
      {column.map((title, index) => (
        <Fragment key={index}>
          {isColumnLink(title, options) ? (
            <TableCell className={classes.tableCell}>
              <Link
                to={`${options.colLink.link}${urlSanitizer(
                  data[camelCase(title)]
                )}`}
              >
                <Typography
                  className={classes.nameText}
                  variant="body1"
                  onClick={handleLinkClick}
                >
                  {data[camelCase(title)]}
                </Typography>
              </Link>
            </TableCell>
          ) : (
            <TableItemCell data={data[camelCase(title)]} />
          )}
        </Fragment>
      ))}

      <Fragment>
        <TableCell>
          <div className={classes.tableCellInner}>
            <Tooltip title="Edit">
              <IconButton onClick={handleEdit}>
                <Edit />
              </IconButton>
            </Tooltip>

            <Tooltip title="Disabled">
              <IconButton onClick={handleDisabled}>
                <DomainIcon />
              </IconButton>
            </Tooltip>
          </div>
        </TableCell>
      </Fragment>
    </TableRow>
  );
}

TableItem.propTypes = {
  setCurrentOrganization: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { setCurrentOrganization }
)(TableItem);
