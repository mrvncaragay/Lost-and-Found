import { GET_PROPERTIES, SEARCH_PROPERTIES, SET_LOADING_PROP } from "./types";
import { logError } from "./notificationActions";

// External
import axios from "axios";

export const getProperties = (rowsPerPage, propType = null) => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/properties/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage,
        propType: propType
      }
    })
    .then(res => {
      dispatch({
        type: GET_PROPERTIES,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
};

// Properties Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_PROP
  };
};
