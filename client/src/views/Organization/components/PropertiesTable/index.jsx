import React from "react";

// External
import MUIDataTable from "mui-datatables";

// Material icons
import { Edit } from "@material-ui/icons";

// Component styles
import styles from "./styles";

function PropertiesTable() {
  const classes = styles();

  const columns = [
    "Name",
    "Property Code",
    "Address",
    "Phone",
    {
      name: "Actions",
      options: {
        customBodyRender: (value, tableMeta, updateValue) => {
          return <Edit />;
        }
      }
    }
  ];

  const data = [
    ["Joe James", "Test Corp", "Yonkers", "NY"],
    ["John Walsh", "Test Corp", "Hartford", "CT"],
    ["Bob Herm", "Test Corp", "Tampa", "FL"],
    ["James Houston", "Test Corp", "Dallas", "TX"]
  ];

  const options = {
    filterType: "checkbox",
    print: false,
    download: false,
    filter: false,
    elevation: 1
  };

  return (
    <MUIDataTable
      title={"Properties List"}
      data={data}
      columns={columns}
      options={options}
    />
  );
}

export default PropertiesTable;
