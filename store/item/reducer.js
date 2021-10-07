import { SET_ITEMS, IS_LOADING, SET_ERROR } from "./actionType";

const initialState = {
  items: [],
  isLoading: false,
  error: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
