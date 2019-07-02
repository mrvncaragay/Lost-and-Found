import React, { useState } from "react";
import { Link } from "react-router-dom";

// Shared Component
import EditItem from "../EditItem";

// Material components
import {
  TableCell,
  TableRow,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";

// Material icon components
import { Edit, DeleteOutline } from "@material-ui/icons";

import styles from "./styles";

function TableItem({ data }) {
  const [isEditing, toggleEdit] = useState(false);

  const classes = styles();

  const handleEdit = () => {
    toggleEdit(!isEditing);
  };

  return isEditing ? (
    <EditItem data={data} toggleEdit={toggleEdit} />
  ) : (
    <TableRow className={classes.tableRow} hover>
      <TableCell className={classes.tableCell}>
        <Link to="#">
          <Typography
            onClick={() => {
              console.log(data._id);
            }}
            className={classes.nameText}
            variant="body1"
          >
            {data.name}
          </Typography>
        </Link>
      </TableCell>
      <TableCell className={classes.tableCell}>{data.propertyCode}</TableCell>
      <TableCell className={classes.tableCell}>{data.address}</TableCell>
      <TableCell>
        <div className={classes.tableCellInner}>
          <Tooltip title="Edit">
            <IconButton onClick={handleEdit}>
              <Edit />
            </IconButton>
          </Tooltip>

          <Tooltip title="Remove">
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </Tooltip>
        </div>
      </TableCell>
    </TableRow>
  );
}

export default TableItem;
