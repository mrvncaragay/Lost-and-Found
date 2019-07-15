import { POST_PROP_INQUIRY, SET_LOADING_PROP, GET_PROP_INQUIRY } from "./types";
import { logError, logSuccess } from "./notificationActions";
import { setLoading } from "./sharedActions";

import axios from "axios";

export const postInquiry = inquiryData => (dispatch, getState) => {
  const propertyId = getState().auth.user.property._id;
  dispatch(setLoading(SET_LOADING_PROP));

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
      dispatch(setLoading(SET_LOADING_PROP));
      dispatch(logError(err.response.data));
    });
};

export const getPropertyInquiry = () => dispatch => {
  dispatch(setLoading(SET_LOADING_PROP));
  axios
    .get("/api/inquiry/")
    .then(res => {
      dispatch({
        type: GET_PROP_INQUIRY,
        payload: res.data
      });
    })
    .catch(err => dispatch(logError(err.response.data)));
};
