import {
  GET_ORGANIZATIONS,
  SET_LOADING,
  CLEAR_CURRENT_ORGANIZATIONS
} from "../actions/types";

// External
import axios from "axios";

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
