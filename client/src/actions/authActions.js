import setAuthJwtToken from "../util/setAuthJwtToken";

import { GET_ERRORS, RESET_ERRORS, SET_CURRENT_USER } from "./types";

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
      // Redirect to dashboard
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log out user
export const logOutUser = () => dispatch => {
  // Remove token from localStorate
  localStorage.removeItem("x-auth-token");
  // Remove auth header from axios
  setAuthJwtToken(false);
  // Set current user object to empty
  dispatch(setCurrentUser({}));
};
