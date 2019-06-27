import { LOGIN_USER, GET_ERRORS, RESET_ERRORS, UPDATE_USER } from "./types";

// External
import axios from "axios";

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
      history.push("/dashboard");
      dispatch({
        type: RESET_ERRORS
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

// localStorage.setItem("x-auth-token", res.data);
// setAuthJwtToken(res.data);
// const decoded = jwt.verify(res.data, process.env.REACT_APP_JWT);
// localStorage.setItem("user", JSON.stringify(decoded));
// // JSON.parse(localStorage.setItem("user")); parse string object to json
