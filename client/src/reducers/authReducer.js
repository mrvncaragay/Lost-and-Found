const reducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT_ERROR":
      return {
        ...state,
        submitted: false,
        errorMessage: action.payload,
        loading: false
      };

    case "SUBMIT_STARTED":
      return { ...state, submitted: false, loading: true };

    case "SET_CURRENT_USER":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
