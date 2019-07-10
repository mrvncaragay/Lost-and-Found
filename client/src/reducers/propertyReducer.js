import {
  GET_PROPERTIES,
  SET_LOADING_PROP,
  POST_PROPERTY,
  EDIT_PROPERTY
} from "../actions/types";

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

    case POST_PROPERTY:
      return {
        ...state,
        properties: {
          data: [action.payload, ...state.properties.data]
        },
        isLoading: false
      };
    case EDIT_PROPERTY:
      return {
        ...state,
        properties: {
          data: state.properties.data.map(prop =>
            prop._id === action.payload._id ? action.payload : prop
          )
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
