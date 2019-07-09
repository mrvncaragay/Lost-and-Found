import {
  GET_USERS,
  SEARCH_USERS,
  SET_LOADING_USER,
  GET_ORG_USERS
} from "./types";
import { logError } from "./notificationActions";

// External
import axios from "axios";

export const postUser = uData => {
  const {
    name,
    organization,
    propertyCode,
    email,
    password,
    adminType,
    status
  } = uData;
  return axios.post("/api/users", {
    name,
    email,
    organization,
    password,
    propertyCode,
    adminType,
    status
  });
};

export const getUsers = rowsPerPage => (dispatch, getState) => {
  dispatch(setLoading());
  const user = getState().auth.user;

  axios
    .post("/api/users/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage,
        orgCode: user.organization.organizationCode,
        adminType: user.adminType,
        propertyCode: user.propertyCode
      }
    })
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getOrgUsers = orgCode => dispatch => {
  dispatch(setLoading());
  //add the state to organization.organization.users
  //add the state to organization.organization.properties
  axios
    .post("/api/swadmin/users/", null, {
      params: {
        orgCode
      }
    })
    .then(res => {
      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const searchUsers = params => dispatch => {
  // Search first in the state?
  // then search db
  dispatch(setLoading());
  axios
    .post("/api/users/search", null, {
      params: {
        params
      }
    })
    .then(res =>
      dispatch({
        type: SEARCH_USERS,
        payload: res.data
      })
    )
    .catch(err => dispatch(logError(err.response.data)));
};

export const updateUser = newData => {
  //Email is excluded
  return axios.put("/api/users/" + newData._id, {
    name: newData.name,
    propertyCode: newData.propertyCode,
    adminType: newData.adminType,
    status: newData.status
  });
};

// Users Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_USER
  };
};
