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
          data: [action.payload, ...state.users.data]
        }
      };
    case GET_USERS:
      return {
        ...state,
        users: {
          data: action.payload.result
        },
        isLoading: false
      };
    case EDIT_USER:
      return {
        ...state,
        users: {
          data: state.users.data.map(org =>
            org._id === action.payload._id ? action.payload : org
          )
        },
        isLoading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: {
          data: action.payload
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
