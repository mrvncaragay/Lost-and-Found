import { postUser, updateUser } from "./userActions";
import { postOrganization, updateOrganization } from "./organizationActions";
import { postProperty, updateProperty } from "./propertyActions";
import { logError, logSuccess } from "./notificationActions";

import {
  POST_ORG_USER,
  EDIT_USER,
  POST_ORGANIZATION,
  EDIT_ORGANIZATION,
  SET_MODEL,
  SET_TYPE,
  SET_FORM,
  POST_PROPERTY,
  EDIT_PROPERTY
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

export const setForm = (model, type) => dispatch => {
  dispatch({
    type: SET_FORM,
    formModel: model,
    formType: type
  });
};

const getOrgID = state => {
  const org = state().organization.organization;

  return org ? org.main._id : null;
};

export const saveForm = (data, form) => (dispatch, getState) => {
  const type = `${form.type}${form.model}`;
  const orgId = getOrgID(getState);

  switch (type) {
    case "postUser":
      const postData = { ...data, organization: orgId };
      postUser(postData)
        .then(res => {
          dispatch({ type: POST_ORG_USER, payload: res.data });
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

    case "postProperty":
      const addIdToData = { ...data, organization: orgId };

      postProperty(addIdToData)
        .then(res => {
          dispatch({ type: POST_PROPERTY, payload: res.data });
          dispatch(
            logSuccess(`Successfully created a property: ${res.data.name}`)
          );
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    case "editProperty":
      const updateData = { ...data, organization: orgId };

      updateProperty(updateData)
        .then(res => {
          dispatch({ type: EDIT_PROPERTY, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    default:
      return;
  }
};