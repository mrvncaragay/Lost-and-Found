import {
  POST_USER,
  GET_USERS,
  SEARCH_USERS,
  EDIT_USER,
  SET_LOADING_USER,
  CLEAR_CURRENT_USERS
} from "../actions/types";

const initialState = {
  data: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_USER:
      return {
        ...state,
        data: [action.payload, ...state.data]
      };
    case GET_USERS:
      return {
        ...state,
        data: action.payload.result,
        isLoading: false
      };

    case EDIT_USER:
      return {
        ...state,
        data: state.data.map(user =>
          user._id === action.payload._id ? action.payload : user
        ),
        isLoading: false
      };
    case SEARCH_USERS:
      return {
        ...state,
        data: { data: action.payload },
        isLoading: false
      };
    case SET_LOADING_USER:
      return {
        ...state,
        isLoading: true
      };
    case CLEAR_CURRENT_USERS:
      return {
        ...state,
        data: null,
        count: null,
        isLoading: false
      };
    default:
      return state;
  }
}
