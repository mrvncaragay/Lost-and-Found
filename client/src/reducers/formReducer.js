import { SET_MODEL, SET_TYPE } from "../actions/types";

const initialState = {
  model: null,
  type: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODEL:
      return {
        ...state,
        model: action.payload
      };

    case SET_TYPE:
      return {
        ...state,
        type: action.payload
      };

    default:
      return state;
  }
}
