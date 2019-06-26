import { LogIn } from "../actions/authActions";

const reducer = (user, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...user, error: { message: action.error } };

    default:
      return user;
  }
};

export default reducer;
