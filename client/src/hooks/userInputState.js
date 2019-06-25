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
      newValues.user[field] = e.target.value;
    }

    setValue(newValues);
  };

  const reset = () => {
    const newValues = { ...state };

    for (const key in newValues) {
      let value = newValues[key];

      typeof value === "boolean"
        ? (newValues[key] = false)
        : (newValues[key] = "");
    }

    setValue(newValues);
  };

  return [state, handleChange, reset];
};
