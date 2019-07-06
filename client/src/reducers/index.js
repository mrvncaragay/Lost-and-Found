import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import organizationReducer from "./organizationReducer";
import userReducer from "./userReducer";
import formReducer from "./formReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  organization: organizationReducer,
  user: userReducer,
  form: formReducer
});
