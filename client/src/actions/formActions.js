import { postUser, updateUser } from "./userActions";
import { postOrganization, updateOrganization } from "./organizationActions";
import { logError, logSuccess } from "./notificationActions";

import {
  POST_USER,
  EDIT_USER,
  POST_ORGANIZATION,
  EDIT_ORGANIZATION,
  SET_MODEL,
  SET_TYPE
} from "./types";

export const setModel = model => dispatch => {
  dispatch({
    type: SET_MODEL,
    payload: model
  });
};

export const setType = model => dispatch => {
  dispatch({
    type: SET_TYPE,
    payload: model
  });
};

export const saveForm = (data, form) => dispatch => {
  const type = `${form.type}${form.model}`;

  switch (type) {
    case "postUser":
      postUser(data)
        .then(res => {
          dispatch({ type: POST_USER, payload: res.data });
          dispatch(logSuccess(`Successfully created a user: ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    case "editUser":
      updateUser(data)
        .then(res => {
          dispatch({ type: EDIT_USER, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    case "postOrganization":
      postOrganization(data)
        .then(res => {
          dispatch({ type: POST_ORGANIZATION, payload: res.data });
          dispatch(
            logSuccess(`Successfully created a organization: ${res.data.name}`)
          );
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    case "editOrganization":
      updateOrganization(data)
        .then(res => {
          dispatch({ type: EDIT_ORGANIZATION, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    default:
      return;
  }
};
