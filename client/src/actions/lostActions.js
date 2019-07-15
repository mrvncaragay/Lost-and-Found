import { POST_PROP_LOST, SET_LOADING_PROP, GET_PROP_LOST } from "./types";
import { logError, logSuccess } from "./notificationActions";
import { setLoading } from "./sharedActions";

import axios from "axios";

export const postLost = lostData => (dispatch, getState) => {
  const propertyId = getState().auth.user.property._id;
  dispatch(setLoading(SET_LOADING_PROP));

  axios
    .post("/api/lost", {
      ...lostData,
      propertyId
    })
    .then(res => {
      dispatch({
        type: POST_PROP_LOST,
        payload: res.data
      });
      dispatch(
        logSuccess(`Succesfully posted found lost - ref#-${res.data.ref}`)
      );
    })
    .catch(err => {
      dispatch(setLoading(SET_LOADING_PROP));
      dispatch(logError(err.response.data));
    });
};

export const getPropertyLost = () => dispatch => {
  dispatch(setLoading(SET_LOADING_PROP));
  axios
    .get("/api/lost/")
    .then(res => {
      dispatch({
        type: GET_PROP_LOST,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
};
