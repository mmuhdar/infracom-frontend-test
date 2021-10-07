import axios from "axios";

import { SET_ERROR, SET_TRANSACTIONS, IS_LOADING } from "./actionType";

const setTransactions = (payload) => {
  const action = {
    type: SET_TRANSACTIONS,
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

export const fetchTransaction = (url) => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const { data } = await axios.get(url);
      dispatch(setTransactions(data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(isLoading(false));
    }
  };
};
