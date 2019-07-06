import { combineReducers } from "redux";
import authReducer from "./authReducer";
import notificationReducer from "./notificationReducer";
import organizationReducer from "./organizationReducer";
import userReducer from "./userReducer";
import formReducer from "./formReducer";

export default combineReducers({
  auth: authReducer,
  notify: notificationReducer,
  organization: organizationReducer,
  user: userReducer,
  form: formReducer
});
