import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import axios from "axios";

const defaultCurrentUser = {
  isAuthenticated: false,
  user: {},
  error: {
    message: ""
  }
};

export const CurrentUserContext = createContext();
export const DispatchContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, dispatch] = useReducer(authReducer, defaultCurrentUser);

  const loggin = userData => {
    axios
      .post("/api/auth", {
        email: userData.email,
        password: userData.password
      })
      .then(res => {
        console.log(res.data);
        // localStorage.setItem("x-auth-token", res.data);
        // history.push("/dashboard");
      })
      .catch(err => dispatch({ type: "LOGIN", error: err.response.data }));
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <DispatchContext.Provider value={{ dispatch, loggin }}>
        {children}
      </DispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}
