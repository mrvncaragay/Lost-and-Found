import {
  POST_ORGANIZATION,
  GET_ORGANIZATIONS,
  EDIT_ORGANIZATION,
  SEARCH_ORGANIZATIONS,
  SET_LOADING_ORG,
  SET_CURRENT_ORGANIZATION
} from "../actions/types";

const initialState = {
  organization: null,
  organizations: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_ORGANIZATION:
      return {
        ...state,
        organizations: {
          data: [action.payload, ...state.organizations.data]
        }
      };

    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: {
          data: action.payload.result
        },
        isLoading: false
      };

    case EDIT_ORGANIZATION:
      return {
        ...state,
        organizations: {
          data: state.organizations.data.map(org =>
            org._id === action.payload._id ? action.payload : org
          )
        },
        isLoading: false
      };

    case SEARCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: {
          data: action.payload
        },
        isLoading: false
      };

    case SET_CURRENT_ORGANIZATION:
      return {
        ...state,
        organization: action.payload
      };

    case SET_LOADING_ORG:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
