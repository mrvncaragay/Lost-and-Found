import { LOG_ERRORS, LOG_SUCCESS, RESET_ERRORS } from "../actions/types";

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case RESET_ERRORS:
      return initialState;
    case LOG_ERRORS:
      return {
        ...state,
        message: action.message,
        type: "error"
      };

    case LOG_SUCCESS:
      return {
        ...state,
        message: action.message,
        type: "success"
      };

    default:
      return state;
  }
}
