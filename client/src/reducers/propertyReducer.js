import { GET_PROPERTIES, SET_LOADING_PROP } from "../actions/types";

const initialState = {
  property: null,
  properties: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROPERTIES:
      return {
        ...state,
        properties: {
          data: action.payload.result
        },
        isLoading: false
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
