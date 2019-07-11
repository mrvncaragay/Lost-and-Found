import setAuthJwtToken from "../util/setAuthJwtToken";
import {
  RESET_ERRORS,
  SET_CURRENT_USER,
  SET_DEFAULT_ORG,
  SET_DEFAULT_PROP
} from "./types";
import { logError, logSuccess } from "./notificationActions";
import {
  setCurrentProperty,
  setCurrentOrganization,
  getOrganizationData
} from "../actions";

// External
import axios from "axios";
import jwt from "jsonwebtoken";

// Register User
// export const registerUser = userData => {
//   return {
//     type: LogIn_User,
//     payload: userData
//   };
// };

// Register User
export const logInUser = (userData, history) => dispatch => {
  axios
    .post("/api/auth", {
      email: userData.email,
      password: userData.password
    })
    .then(res => {
      // Save jwt token to localStorage
      localStorage.setItem("x-auth-token", res.data);
      // Set the jwt token to header
      setAuthJwtToken(res.data);
      // Decoded jwt token
      const decoded = jwt.verify(res.data, process.env.REACT_APP_JWT);
      // Set Current User
      dispatch(setCurrentUser(decoded));
      // Reset Error
      dispatch({
        type: RESET_ERRORS
      });

      if (decoded.adminType === "propAdmin") {
        // Set property for propAdmin
        dispatch(setCurrentProperty(decoded.property));
      }

      if (decoded.adminType === "swAdmin" || decoded.adminType === "orgAdmin") {
        // Set Current Organization
        dispatch(setCurrentOrganization(decoded.property.organization));
        dispatch(
          getOrganizationData(decoded.property.organization.organizationCode)
        );
      }

      history.push("/dashboard");

      if (decoded.adminType === "swAdmin") history.push("/organizations");

      // log successful logged in
      dispatch(logSuccess("Successfully logged in."));
    })
    .catch(err => {
      dispatch(logError(err.response.data));
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Set default organization state
export const setOrgDefault = () => {
  return {
    type: SET_DEFAULT_ORG
  };
};

// Set default organization state
export const setPropDefault = () => {
  return {
    type: SET_DEFAULT_PROP
  };
};

// Log out user
export const logOutUser = () => dispatch => {
  // Remove token from localStorate
  localStorage.clear();

  // Remove auth header from axios
  setAuthJwtToken(false);
  // Set current user object to empty
  dispatch(setCurrentUser({}));

  // clear other data here
  dispatch(setOrgDefault());
  dispatch(setPropDefault());

  // log successful logged out
  dispatch(logSuccess("Successfully logged out."));
};
