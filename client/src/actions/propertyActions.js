import { logError, logSuccess } from "./notificationActions";

import {
  SET_LOADING_PROP,
  SET_CURRENT_PROPERTY,
  POST_PROP_USER
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

export const getPropertyUsers = () => {
  axios.post();
};

export const postUserProperty = data => (dispatch, getState) => {
  dispatch(setLoading());
  const property = getState().property.main._id;
  const organization = getState().organization.organization.main._id;

  axios
    .post("/api/users/", {
      ...data,
      property,
      organization
    })
    .then(res => {
      dispatch({
        type: POST_PROP_USER,
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
  return {
    type: SET_CURRENT_PROPERTY,
    payload: prop
  };
};

// Properties Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_PROP
  };
};
