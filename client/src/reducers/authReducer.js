import { LOGIN_USER, UPDATE_USER } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  loading: false,
  submitted: false,
  response: null,
  errorMessage: null,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
