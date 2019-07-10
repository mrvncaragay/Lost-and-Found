import { SET_LOADING_PROP, SET_CURRENT_PROPERTY } from "../actions/types";

const initialState = {
  main: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
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
