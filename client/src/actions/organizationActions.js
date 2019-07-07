import {
  GET_ORGANIZATIONS,
  SEARCH_ORGANIZATIONS,
  CLEAR_CURRENT_ORGANIZATIONS,
  SET_LOADING_ORG
} from "./types";

// External
import axios from "axios";

export const postOrganization = orgData => {
  return axios.post("/api/organizations", {
    name: orgData.name,
    propertyCode: orgData.propertyCode,
    address: orgData.address
  });
};

export const getOrganizations = rowsPerPage => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/organizations/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage
      }
    })
    .then(res => {
      dispatch({
        type: GET_ORGANIZATIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const searchOrganizations = params => dispatch => {
  // Search first in the state?
  // then search db
  dispatch(setLoading());
  axios
    .post("/api/organizations/search", null, {
      params: {
        params
      }
    })
    .then(res =>
      dispatch({
        type: SEARCH_ORGANIZATIONS,
        payload: res.data
      })
    )
    .catch(err => console.log(err));
};

export const updateOrganization = newData => {
  return axios.put("/api/organizations/" + newData._id, {
    name: newData.name,
    propertyCode: newData.propertyCode,
    address: newData.address
  });
};

// Organization Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_ORG
  };
};

// Clear organizations
export const clearOrganizations = () => {
  return {
    type: CLEAR_CURRENT_ORGANIZATIONS
  };
};
