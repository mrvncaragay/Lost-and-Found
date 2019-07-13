import { POST_PROP_INQUIRY, SET_LOADING_PROP } from "./types";
import { logError, logSuccess } from "./notificationActions";

import axios from "axios";

export const postInquiry = inquiryData => (dispatch, getState) => {
  const propertyId = getState().auth.user.property._id;
  dispatch(setLoading());

  axios
    .post("/api/inquiry", {
      ...inquiryData,
      propertyId
    })
    .then(res => {
      dispatch({
        type: POST_PROP_INQUIRY,
        payload: res.data
      });
      dispatch(
        logSuccess(`Succesfully created new inquiry ref#-${res.data.ref}`)
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
