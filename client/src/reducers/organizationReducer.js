import { GET_ORGANIZATION } from "../actions/types";

const initialState = {
  organization: null,
  organizations: null,
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
