import { useState } from "react";

export default initialVal => {
  const [state, setValue] = useState(initialVal);

  const handleChange = (field, e) => {
    const newValues = { ...state };
    newValues[field] = e.target.value;

    setValue(newValues);
  };

  const reset = () => {
    const newValues = { ...state };
    newValues.email = "";
    newValues.password = "";

    setValue(newValues);
  };

  return [state, handleChange, reset];
};
