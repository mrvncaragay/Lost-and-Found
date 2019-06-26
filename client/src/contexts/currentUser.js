import React, { createContext, useReducer } from "react";
import authReducer from "../reducers/authReducer";

const defaultCurrentUser = {
  submitted: false,
  isAuthenticated: false,
  loading: false,
  response: null,
  errorMessage: null
};

export const CurrentUserContext = createContext();
export const DispatchContext = createContext();

export function CurrentUserProvider({ children }) {
  const [currentUser, dispatch] = useReducer(authReducer, defaultCurrentUser);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </CurrentUserContext.Provider>
  );
}
