import {
  POST_ORGANIZATION,
  GET_ORGANIZATIONS,
  SEARCH_ORGANIZATIONS,
  SET_LOADING,
  CLEAR_CURRENT_ORGANIZATIONS,
  GET_ERRORS
} from "../actions/types";

// External
import axios from "axios";

export const postOrganization = orgData => dispatch => {
  axios
    .post("/api/organizations", {
      name: orgData.name,
      propertyCode: orgData.propertyCode,
      address: orgData.address
    })
    .then(res => dispatch({ type: POST_ORGANIZATION, payload: res.data }))
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};

export const getOrganizations = () => dispatch => {
  dispatch(setLoading());
  axios
    .get("/api/organizations")
    .then(res =>
      dispatch({
        type: GET_ORGANIZATIONS,
        payload: res.data
      })
    )
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

// Organizations Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// Clear organizations
export const clearOrganizations = () => {
  return {
    type: CLEAR_CURRENT_ORGANIZATIONS
  };
};
