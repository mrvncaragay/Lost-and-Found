import React, { useState, Fragment, createRef } from "react";

// External
import MUIDataTable from "mui-datatables";

// Material icons
import { Edit, AddBox } from "@material-ui/icons";

// Material Components
import { IconButton, Tooltip } from "@material-ui/core";

// Component styles
import styles from "./styles";

// Shared Components
import { PropertyForm } from "../../components";

function PropertiesTable() {
  const classes = styles();

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["James Houston", "Test Corp", "Dallas", "TX"],
    ["Borlogan", "Test Corp", "Dallas", "TX"]
  ];

  const columns = ["Name", "Property Code", "Address", "Phone"];

  const options = {
    print: false,
    download: false,
    filter: false,
    elevation: 1,
    customToolbar: () => {
      return <PropertyForm />;
    }
  };

  return (
    <Fragment>
      <MUIDataTable
        title={"Properties List"}
        data={data}
        columns={columns}
        options={options}
      />
    </Fragment>
  );
}

export default PropertiesTable;
