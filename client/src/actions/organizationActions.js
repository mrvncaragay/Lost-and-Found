import {
  GET_ORGANIZATIONS,
  SEARCH_ORGANIZATIONS,
  SET_CURRENT_ORGANIZATION,
  SET_LOADING_ORG,
  GET_ORG_DATA
} from "./types";

import { logError } from "./notificationActions";

// External
import axios from "axios";

export const postOrganization = orgData => {
  return axios.post("/api/organizations", {
    name: orgData.name,
    organizationCode: orgData.organizationCode,
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

export const getOrganizationData = () => (dispatch, getState) => {
  dispatch(setLoading());
  const orgCode = getState().organization.organization.main.organizationCode;

  axios
    .post("/api/data/organization", null, {
      params: {
        orgCode
      }
    })
    .then(res => {
      dispatch({
        type: GET_ORG_DATA,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
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
    organizationCode: newData.organizationCode,
    address: newData.address
  });
};

export const setCurrentOrganization = org => {
  return {
    type: SET_CURRENT_ORGANIZATION,
    payload: org
  };
};

// Organization Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_ORG
  };
};
