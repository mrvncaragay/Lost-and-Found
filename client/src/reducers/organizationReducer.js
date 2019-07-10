import {
  POST_ORGANIZATION,
  POST_ORG_USER,
  EDIT_ORG_USER,
  POST_ORG_PROPERTY,
  GET_ORGANIZATIONS,
  EDIT_ORGANIZATION,
  EDIT_ORG_PROPERTY,
  SEARCH_ORGANIZATIONS,
  SET_LOADING_ORG,
  SET_CURRENT_ORGANIZATION,
  GET_ORG_DATA
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

    case POST_ORG_USER:
      return {
        ...state,
        organization: {
          main: { ...state.organization.main },
          users: [action.payload, ...state.organization.users],
          properties: [...state.organization.properties]
        }
      };

    case POST_ORG_PROPERTY:
      return {
        ...state,
        organization: {
          main: { ...state.organization.main },
          users: [...state.organization.users],
          properties: [action.payload, ...state.organization.properties]
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

    case GET_ORG_DATA:
      return {
        ...state,
        organization: {
          main: { ...state.organization.main },
          users: action.payload.users,
          properties: action.payload.properties
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

    case EDIT_ORG_PROPERTY:
      return {
        ...state,
        organization: {
          main: { ...state.organization.main },
          users: [...state.organization.users],
          properties: state.organization.properties.map(prop =>
            prop._id === action.payload._id ? action.payload : prop
          )
        },
        isLoading: false
      };

    case EDIT_ORG_USER:
      return {
        ...state,
        organization: {
          main: { ...state.organization.main },
          properties: [...state.organization.properties],
          users: state.organization.users.map(user =>
            user._id === action.payload._id ? action.payload : user
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
        organization: {
          main: action.payload
        }
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
