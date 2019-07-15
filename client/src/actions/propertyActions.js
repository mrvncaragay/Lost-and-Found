import { logError, logSuccess } from "./notificationActions";
import { setLoading } from "./sharedActions";

import {
  SET_LOADING_PROP,
  SET_CURRENT_PROPERTY,
  POST_PROP_USER,
  GET_PROP_DATA,
  POST_ORG_USER,
  EDIT_PROP_USER,
  EDIT_ORG_USER
} from "./types";

// External
import axios from "axios";

export const postProperty = pData => {
  const { name, propertyCode, address, phone, organization } = pData;
  return axios.post("/api/properties", {
    name,
    propertyCode,
    address,
    phone,
    organization
  });
};

export const getPropertyData = () => dispatch => {
  dispatch(setLoading(SET_LOADING_PROP));
  axios
    .post("/api/data/property")
    .then(res => {
      dispatch({
        type: GET_PROP_DATA,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
};

export const postUserProperty = data => (dispatch, getState) => {
  dispatch(setLoading(SET_LOADING_PROP));
  const user = getState().auth.user;
  const property = getState().property.main._id;
  const organization = getState().organization.organization.main._id;

  axios
    .post("/api/users/", {
      ...data,
      property,
      organization
    })

    .then(res => {
      if (user.adminType === "swAdmin" || user.adminType === "orgAdmin")
        dispatch({
          type: POST_ORG_USER,
          payload: res.data
        });

      if (user.adminType === "propAdmin" || user.adminType === "orgAdmin")
        dispatch({
          type: POST_PROP_USER,
          payload: res.data
        });
      dispatch(logSuccess(`Successfully created a user: ${res.data.name}`));
    })
    .catch(err => {
      dispatch(setLoading(SET_LOADING_PROP));
      dispatch(logError(err.response.data));
    });
};

export const editUserProperty = data => (dispatch, getState) => {
  const user = getState().auth.user;
  dispatch(setLoading(SET_LOADING_PROP));
  axios
    .put("/api/users/" + data._id, {
      name: data.name,
      email: data.email,
      adminType: data.adminType,
      status: data.status
    })
    .then(res => {
      if (user.adminType === "swAdmin" || user.adminType === "orgAdmin")
        dispatch({
          type: EDIT_ORG_USER,
          payload: res.data
        });

      if (user.adminType === "propAdmin" || user.adminType === "orgAdmin")
        dispatch({
          type: EDIT_PROP_USER,
          payload: res.data
        });

      dispatch(logSuccess(`Successfully created a user: ${res.data.name}`));
    })
    .catch(err => dispatch(logError(err.response.data)));
};

export const updateProperty = newData => {
  const { name, propertyCode, address, phone, organization } = newData;
  return axios.put("/api/properties/" + newData._id, {
    name,
    propertyCode,
    address,
    phone,
    organization
  });
};

export const setCurrentProperty = prop => {
  // save current property to local storage
  localStorage.setItem("property", JSON.stringify(prop));

  return {
    type: SET_CURRENT_PROPERTY,
    payload: prop
  };
};
