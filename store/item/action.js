import axios from "axios";

import { SET_ERROR, SET_ITEMS, IS_LOADING } from "./actionType";

const setItems = (payload) => {
  const action = {
    type: SET_ITEMS,
    payload,
  };
  return action;
};

const isLoading = (payload) => {
  const action = {
    type: IS_LOADING,
    payload,
  };
  return action;
};

const setError = (payload) => {
  const action = {
    type: SET_ERROR,
    payload,
  };
  return action;
};

export const fetchItem = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const { data } = await axios.get(url);
      dispatch(setItems(data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(isLoading(false));
    }
  };
};
