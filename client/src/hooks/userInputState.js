import { useState } from "react";

export default initialVal => {
  const [state, setValue] = useState(initialVal);

  const handleChange = (field, e) => {
    const newValues = { ...state };

    if (field === "error") {
      newValues[field] = true;
      newValues.errorMessage = e;
    } else {
      newValues.error = false;
      newValues[field] = e.target.value;
    }

    setValue(newValues);
  };

  const reset = () => {
    const newValues = { ...state };
    newValues.email = "";
    newValues.password = "";
    newValues.errorMessage = "";
    newValues.error = false;

    setValue(newValues);
  };

  return [state, handleChange, reset];
};
