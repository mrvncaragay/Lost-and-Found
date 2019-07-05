import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Material components
import { Typography } from "@material-ui/core";

function Tab() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log(newValue);
  };

  return (
    <NavLink>
      <Typography variant="h6">{"Sign In"}</Typography>
    </NavLink>
  );
}

export default Tab;
