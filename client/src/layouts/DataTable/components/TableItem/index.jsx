import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

// Helper function
import camelCase from "../../../../util/camelCaseStr";
import { isColumnLink } from "../../../../util/validation";
import urlSanitizer from "../../../../util/urlSanitizer";

// Shared Component
import ItemData from "./ItemData";
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

function TableItem({ data, column, options }) {
  const [isEditing, toggleEdit] = useState(false);

  const classes = styles();

  const handleEdit = () => {
    toggleEdit(!isEditing);
  };

  const handleDisabled = () => {};

  return isEditing ? (
    <TableEditRow data={data} toggleEdit={toggleEdit} />
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
                <Typography className={classes.nameText} variant="body1">
                  {data[camelCase(title)]}
                </Typography>
              </Link>
            </TableCell>
          ) : (
            <ItemData data={data[camelCase(title)]} />
          )}
        </Fragment>
      ))}

      <TableCell>
        <div className={classes.tableCellInner}>
          <Tooltip title="Edit">
            <IconButton onClick={handleEdit}>
              <Edit />
            </IconButton>
          </Tooltip>

          {/* <Tooltip title="Disabled">
            <IconButton onClick={handleDisabled}>
              <DomainIcon />
            </IconButton>
          </Tooltip> */}
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableItem;
