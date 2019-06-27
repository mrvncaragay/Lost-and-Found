import { RESET_ERRORS } from "./types";

// Reset Error
export const resetError = () => {
  return {
    type: RESET_ERRORS
  };
};
