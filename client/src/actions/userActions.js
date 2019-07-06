import {
  POST_USER,
  GET_USERS,
  SEARCH_USERS,
  EDIT_USER,
  SET_LOADING,
  CLEAR_CURRENT_USERS,
  GET_ERRORS
} from "./types";

// External
import axios from "axios";

export const postUser = orgData => {
  return axios.post("/api/users", {
    name: orgData.name,
    email: orgData.email,
    propertyCode: orgData.propertyCode,
    password: orgData.password,
    adminType: orgData.adminType,
    status: orgData.status
  });
};

export const getUsers = (
  rowsPerPage,
  pageNumber,
  propType = null
) => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/users/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage,
        pageNumber: pageNumber,
        propType: propType
      }
    })
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data,
        pagination: { rowsPerPage, pageNumber }
      })
    )
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
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const updateUser = newData => dispatch => {
  axios
    .put("/api/users/" + newData.id, {
      name: newData.name,
      propertyCode: newData.propertyCode,
      adminType: newData.adminType,
      status: newData.status
    })
    .then(res =>
      dispatch({
        type: EDIT_USER,
        payload: res.data
      })
    )
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

// Organizations Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Clear organizations
export const clearOrganizations = () => {
  return {
    type: CLEAR_CURRENT_USERS
  };
};
