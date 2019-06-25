import { LogIn } from "../actions/authActions";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return LogIn(state, action.user);

    default:
      return LogIn("Defaul");
  }
};

export default reducer;
