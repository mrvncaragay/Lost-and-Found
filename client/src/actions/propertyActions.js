import { SET_LOADING_PROP, SET_CURRENT_PROPERTY } from "./types";

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

export const setCurrentProperty = prop => {
  return {
    type: SET_CURRENT_PROPERTY,
    payload: prop
  };
};

// Properties Loading
export const setLoading = () => {
  return {
    type: SET_LOADING_PROP
  };
};
