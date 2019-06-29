import {
  POST_ORGANIZATION,
  GET_ORGANIZATION,
  GET_ORGANIZATIONS,
  COUNT_ORGANIZATIONS,
  SEARCH_ORGANIZATIONS,
  SET_LOADING,
  CLEAR_CURRENT_ORGANIZATIONS
} from "../actions/types";

const initialState = {
  organization: null,
  organizations: null,
  count: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_ORGANIZATION:
      return {
        ...state,
        organizations: [action.payload, ...state.organizations]
      };
    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload.result,
        count: action.payload.count,
        isLoading: false
      };
    case SEARCH_ORGANIZATIONS:
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
        count: null,
        isLoading: false
      };
    default:
      return state;
  }
}
