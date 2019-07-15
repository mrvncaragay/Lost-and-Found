import { POST_PROP_FOUND, SET_LOADING_PROP, GET_PROP_FOUND } from "./types";
import { logError, logSuccess } from "./notificationActions";
import { setLoading } from "./sharedActions";

import axios from "axios";

export const postFound = lostData => (dispatch, getState) => {
  const propertyId = getState().auth.user.property._id;
  dispatch(setLoading(SET_LOADING_PROP));

  axios
    .post("/api/found", {
      ...lostData,
      propertyId
    })
    .then(res => {
      dispatch({
        type: POST_PROP_FOUND,
        payload: res.data
      });
      dispatch(
        logSuccess(`Succesfully posted found form - ref#-${res.data.ref}`)
      );
    })
    .catch(err => {
      dispatch(setLoading(SET_LOADING_PROP));
      dispatch(logError(err.response.data));
    });
};

export const getPropertyFound = () => dispatch => {
  dispatch(setLoading(SET_LOADING_PROP));
  axios
    .get("/api/found/")
    .then(res => {
      dispatch({
        type: GET_PROP_FOUND,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
};
