import { RESET_ERRORS, LOG_ERRORS, LOG_SUCCESS } from "./types";

// Reset Error
export const resetError = () => {
  return {
    type: RESET_ERRORS
  };
};

export const logError = message => {
  return {
    type: LOG_ERRORS,
    message: message
  };
};
export const logSuccess = message => {
  return {
    type: LOG_SUCCESS,
    message: message
  };
};
