const SUBMIT_STARTED = "SUBMIT_STARTED";
const SUBMIT_ERROR = "SUBMIT_ERROR";
const SET_CURRENT_USER = "SET_CURRENT_USER";

export const submitError = payload => {
  if (!payload) return;

  return { type: SUBMIT_ERROR, payload };
};

export const submitStarted = () => {
  return { type: SUBMIT_STARTED };
};

export const setCurrentUser = payload => {
  if (!payload) return;

  return { type: SET_CURRENT_USER, payload };
};
