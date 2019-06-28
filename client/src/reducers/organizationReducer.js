import {
  GET_ORGANIZATION,
  GET_ORGANIZATIONS,
  SET_LOADING,
  CLEAR_CURRENT_ORGANIZATIONS
} from "../actions/types";

const initialState = {
  organization: null,
  organizations: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
        isLoading: false
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case CLEAR_CURRENT_ORGANIZATIONS:
      return {
        ...state,
        organization: null,
        organizations: null,
        isLoading: false
      };
    default:
      return state;
  }
}
