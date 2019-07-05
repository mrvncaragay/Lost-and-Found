import React, { useState, Fragment, memo } from "react";

// Externals
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

// Shared Components
import { TableItem, TableForm, TableToolbar } from "./components";

// Material components
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TablePagination,
  TableCell,
  Paper
} from "@material-ui/core";

// Style component
import styles from "./styles";

function DataTable({ title, column, data, options = {} }) {
  const [tableForm, setTableForm] = useState(false);
  const classes = styles();

  const handleChangePage = () => {};
  const handleChangeRowsPerPage = () => {};
  console.log("Main Table");
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PerfectScrollbar>
          <TableToolbar title={title} toggleTableForm={setTableForm} />

          <Table>
            <TableHead>
              <TableRow>
                {column.map((title, index) => (
                  <Fragment key={index}>
                    <TableCell align="left">{title}</TableCell>
                  </Fragment>
                ))}
                <TableCell className={classes.actions} align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableForm ? <TableForm toggleTableForm={setTableForm} /> : null}
              {data.map((item, index) => (
                <Fragment key={index}>
                  <TableItem data={item} column={column} options={options} />
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </PerfectScrollbar>
        <TablePagination
          backIconButtonProps={{
            "aria-label": "Previous Page"
          }}
          component="div"
          count={data.length} //organizations.count
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={0} //organizations.pageNum
          rowsPerPage={5} // organizations.perRow
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Paper>
    </div>
  );
}

export default memo(DataTable);
