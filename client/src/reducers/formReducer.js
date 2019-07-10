import { SET_FORM } from "../actions/types";

const initialState = {
  model: null,
  type: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_FORM:
      return {
        model: action.formModel,
        type: action.formType
      };

    default:
      return state;
  }
}
