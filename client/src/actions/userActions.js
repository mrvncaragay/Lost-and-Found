import { GET_USERS, SEARCH_USERS, SET_LOADING_USER } from "./types";
import { logError } from "./notificationActions";

// External
import axios from "axios";

export const postUser = uData => {
  const { name, email, propertyCode, password, adminType, status } = uData;
  return axios.post("/api/users", {
    name,
    email,
    propertyCode,
    password,
    adminType,
    status
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
