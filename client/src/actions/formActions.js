import { postUser, updateUser } from "./userActions";
import { postOrganization, updateOrganization } from "./organizationActions";
import { postProperty, updateProperty } from "./propertyActions";
import { logError, logSuccess } from "./notificationActions";

import {
  EDIT_USER,
  POST_ORG_USER,
  EDIT_ORG_USER,
  POST_ORGANIZATION,
  EDIT_ORGANIZATION,
  SET_FORM,
  POST_ORG_PROPERTY,
  EDIT_ORG_PROPERTY
} from "./types";

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
  const newData = { ...data, organization: orgId };

  switch (type) {
    //used by swadmin in views/organization
    case "postUser":
      postUser(newData)
        .then(res => {
          dispatch({ type: POST_ORG_USER, payload: res.data });
          dispatch(logSuccess(`Successfully created a user: ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    //used by swadmin in views/user
    case "editUser":
      updateUser(newData)
        .then(res => {
          dispatch({ type: EDIT_USER, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    //used by swadmin in views/swDashboard
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

    //used by swadmin in views/swDashboard
    case "editOrganization":
      updateOrganization(data)
        .then(res => {
          dispatch({ type: EDIT_ORGANIZATION, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    //used by swadmin in views/organization
    case "postProperty":
      postProperty(newData)
        .then(res => {
          dispatch({ type: POST_ORG_PROPERTY, payload: res.data });
          dispatch(
            logSuccess(`Successfully created a property: ${res.data.name}`)
          );
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    //used by swadmin in views/organization
    case "editProperty":
      updateProperty(newData)
        .then(res => {
          dispatch({ type: EDIT_ORG_PROPERTY, payload: res.data });
          dispatch(logSuccess(`Successfully updated ${res.data.name}`));
        })
        .catch(err => dispatch(logError(err.response.data)));
      break;

    default:
      return;
  }
};
