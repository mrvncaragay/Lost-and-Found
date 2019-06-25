import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

const defaultCurrentUser = {
  isAuthenticated: false,
  user: {}
};

export const CurrentUserContext = createContext();

export function CurrentUserProvider(props) {
  const [currentUser, dispatch] = useReducer(authReducer, defaultCurrentUser);

  return (
    <CurrentUserContext.Provider value={{ currentUser, dispatch }}>
      {props.children}
    </CurrentUserContext.Provider>
  );
}
