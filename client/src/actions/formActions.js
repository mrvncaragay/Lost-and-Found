import { postUser, editUser } from "./userActions";
import { postOrganization } from "./organizationActions";

import {
  POST_USER,
  POST_ORGANIZATION,
  GET_ERRORS,
  SET_MODEL,
  SET_TYPE
} from "./types";

import camelCase from "../util/camelCaseStr";

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
  const type = camelCase(`${form.type} ${form.model}`);

  switch (type) {
    case "postUser":
      postUser(data)
        .then(res => dispatch({ type: POST_USER, payload: res.data }))
        .catch(err =>
          dispatch({ type: GET_ERRORS, payload: err.response.data })
        );
      break;
    case "postOrganization":
      postOrganization(data)
        .then(res => dispatch({ type: POST_ORGANIZATION, payload: res.data }))
        .catch(err =>
          dispatch({ type: GET_ERRORS, payload: err.response.data })
        );
      break;
    default:
      return;
  }
};
