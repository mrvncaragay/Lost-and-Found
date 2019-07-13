import { POST_PROP_LOST, SET_LOADING_PROP } from "./types";
import { logError, logSuccess } from "./notificationActions";

import axios from "axios";

export const postLost = lostData => (dispatch, getState) => {
  const propertyId = getState().auth.user.property._id;
  dispatch(setLoading());

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
      dispatch(setLoading());
      dispatch(logError(err.response.data));
    });
};

export const setLoading = () => {
  return {
    type: SET_LOADING_PROP
  };
};
