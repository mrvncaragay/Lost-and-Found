import React from "react";
import { Link } from "react-router-dom";

// Material components
import { TableCell, TableRow, Typography, IconButton } from "@material-ui/core";

// Material icon components
import { Edit, DeleteOutline } from "@material-ui/icons";

import styles from "./styles";

function OrganizationItem({ _id, name, propertyCode, address }) {
  const classes = styles();

  return (
    <TableRow className={classes.tableRow} hover>
      <TableCell>
        <div className={classes.tableCellInner}>
          <IconButton className={classes.edit}>
            <Edit />
          </IconButton>
          <IconButton>
            <DeleteOutline />
          </IconButton>
        </div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Link to="#">
          <Typography
            onClick={() => {
              console.log(_id);
            }}
            className={classes.nameText}
            variant="body1"
          >
            {name}
          </Typography>
        </Link>
      </TableCell>
      <TableCell className={classes.tableCell}>{propertyCode}</TableCell>
      <TableCell className={classes.tableCell}>{address}</TableCell>
    </TableRow>
  );
}

export default OrganizationItem;
