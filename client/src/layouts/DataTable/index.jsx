import React, { useState, Fragment, memo, useEffect } from "react";

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
  const classes = styles();
  const [dataTable, setDataTable] = useState([...data]);
  const [tableForm, setTableForm] = useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  /* eslint-disable */
  useEffect(() => {
    setDataTable([...data])
  }, [data]);
  /* eslint-enable */

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PerfectScrollbar>
          <TableToolbar
            title={title}
            toggleTableForm={setTableForm}
            data={data}
            setDataTable={setDataTable}
            addButton={options.addButton}
            addButtonSetForm={options.addButtonSetForm}
          />

          <Table size="small">
            <TableHead>
              <TableRow>
                {column.map((title, index) => (
                  <Fragment key={index}>
                    <TableCell align="left">{title}</TableCell>
                  </Fragment>
                ))}
                <TableCell className={classes.actions} align="left">
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableForm ? (
                <TableForm
                  toggleTableForm={setTableForm}
                  column={column}
                  options={options}
                />
              ) : null}
              {dataTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <Fragment key={index}>
                    <TableItem
                      data={item}
                      column={column}
                      options={options}
                      setSelectedData={options.setSelectedData}
                    />
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
          count={dataTable.length}
          nextIconButtonProps={{
            "aria-label": "Next Page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
        />
      </Paper>
    </div>
  );
}

export default memo(DataTable);
