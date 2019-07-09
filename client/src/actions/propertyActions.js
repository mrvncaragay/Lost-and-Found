import { GET_PROPERTIES, SET_LOADING_PROP } from "./types";
import { logError } from "./notificationActions";

// External
import axios from "axios";

export const postProperty = pData => {
  const { name, propertyCode, address, phone, organization } = pData;
  return axios.post("/api/properties", {
    name,
    propertyCode,
    address,
    phone,
    organization
  });
};

export const getProperties = (rowsPerPage, orgCode = null) => dispatch => {
  dispatch(setLoading());
  axios
    .post("/api/properties/dashboard", null, {
      params: {
        rowsPerPage: rowsPerPage,
        orgCode: orgCode
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

export const updateProperty = newData => {
  const { name, propertyCode, address, phone, organization } = newData;
  return axios.put("/api/properties/" + newData._id, {
    name,
    propertyCode,
    address,
    phone,
    organization
  });
};

// Properties Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_PROP
  };
};
