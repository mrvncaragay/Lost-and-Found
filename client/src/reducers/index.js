import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import organizationReducer from "./organizationReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  organization: organizationReducer
});
