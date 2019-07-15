import { GET_USERS, SEARCH_USERS, SET_LOADING_USER } from "./types";
import { logError } from "./notificationActions";
import { setLoading } from "./sharedActions";

// External
import axios from "axios";

export const postUser = uData => {
  const { name, organization, email, password, adminType, status } = uData;
  return axios.post("/api/users", {
    name,
    email,
    organization,
    password,
    adminType,
    status
  });
};

export const getUsers = rowsPerPage => (dispatch, getState) => {
  dispatch(setLoading(SET_LOADING_USER));
  const user = getState().auth.user;

  axios
    .post("/api/users/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage,
        orgCode: user.organizationCode,
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
    .catch(err => dispatch(logError(err.response.data)));
};

export const searchUsers = params => dispatch => {
  // Search first in the state?
  // then search db
  dispatch(setLoading(SET_LOADING_USER));
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
    email: newData.email,
    propertyCode: newData.propertyCode,
    adminType: newData.adminType,
    status: newData.status
  });
};
