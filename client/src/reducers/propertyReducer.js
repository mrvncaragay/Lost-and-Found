import {
  GET_PROP_DATA,
  SET_LOADING_PROP,
  SET_CURRENT_PROPERTY,
  POST_PROP_USER,
  EDIT_PROP_USER
} from "../actions/types";

const initialState = {
  main: null,
  users: [],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case POST_PROP_USER:
      return {
        ...state,
        users: [action.payload, ...state.users],
        isLoading: false
      };

    case EDIT_PROP_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user._id === action.payload._id ? action.payload : user
        ),
        isLoading: false
      };

    case SET_CURRENT_PROPERTY:
      return {
        ...state,
        main: action.payload
      };

    case GET_PROP_DATA: {
      return {
        ...state,
        users: action.payload.users,
        isLoading: false
      };
    }

    case SET_LOADING_PROP:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
