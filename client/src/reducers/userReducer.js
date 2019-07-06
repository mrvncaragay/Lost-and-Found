import {
  POST_USER,
  GET_USERS,
  SEARCH_USERS,
  EDIT_USER,
  SET_LOADING,
  CLEAR_CURRENT_USERS
} from "../actions/types";

const initialState = {
  user: null,
  users: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        users: {
          data: [action.payload, ...state.users.data],
          count: state.users.count + 1,
          perRow: state.users.perRow,
          pageNum: state.users.pageNum
        }
      };
    case GET_USERS:
      return {
        ...state,
        users: {
          data: action.payload.result,
          count: action.payload.count,
          perRow: action.pagination.rowsPerPage,
          pageNum: action.pagination.pageNumber
        },
        isLoading: false
      };
    case EDIT_USER:
      return {
        ...state,
        users: {
          data: state.users.data.map(org =>
            org._id === action.payload._id ? action.payload : org
          ),
          count: state.users.count,
          perRow: state.users.perRow,
          pageNum: state.users.pageNum
        },
        isLoading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: {
          data: action.payload,
          count: action.payload.length,
          perRow: state.users.perRow,
          pageNum: 0
        },
        isLoading: false
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case CLEAR_CURRENT_USERS:
      return {
        ...state,
        user: null,
        users: null,
        count: null,
        isLoading: false
      };
    default:
      return state;
  }
}
