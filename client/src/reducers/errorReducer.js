const ADD = "ADD";

export const addError = data => {
  if (!data) return;

  return {
    type: ADD,
    data
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, error: action.error };

    default:
      return state;
  }
};

export default reducer;
