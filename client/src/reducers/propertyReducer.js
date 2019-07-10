import {
  SET_LOADING_PROP,
  SET_CURRENT_PROPERTY,
  POST_PROP_USER
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

    case SET_CURRENT_PROPERTY:
      return {
        ...state,
        main: action.payload
      };

    case SET_LOADING_PROP:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
