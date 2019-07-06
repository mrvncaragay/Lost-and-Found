import {
  POST_ORGANIZATION,
  GET_ORGANIZATIONS,
  EDIT_ORGANIZATION,
  SEARCH_ORGANIZATIONS,
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
    case POST_ORGANIZATION:
      return {
        ...state,
        organizations: {
          data: [action.payload, ...state.organizations.data],
          count: state.organizations.count + 1,
          perRow: state.organizations.perRow,
          pageNum: state.organizations.pageNum
        }
      };
    case GET_ORGANIZATIONS:
      return {
        ...state,
        organizations: {
          data: action.payload.result,
          count: action.payload.count,
          perRow: action.pagination.rowsPerPage,
          pageNum: action.pagination.pageNumber
        },
        isLoading: false
      };
    case EDIT_ORGANIZATION:
      return {
        ...state,
        organizations: {
          data: state.organizations.data.map(org =>
            org._id === action.payload._id ? action.payload : org
          ),
          count: state.organizations.count,
          perRow: state.organizations.perRow,
          pageNum: state.organizations.pageNum
        },
        isLoading: false
      };
    case SEARCH_ORGANIZATIONS:
      return {
        ...state,
        organizations: {
          data: action.payload,
          count: action.payload.length,
          perRow: state.organizations.perRow,
          pageNum: 0
        },
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
