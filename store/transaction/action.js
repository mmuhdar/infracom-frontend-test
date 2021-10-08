import axios from "axios";

import { SET_ERROR, SET_TRANSACTIONS, IS_LOADING } from "./actionType";
const baseURL = "https://infracom-server-test.herokuapp.com";

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

export const fetchTransaction = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(isLoading(true));
      const { data } = await axios.get(`${baseURL}/transactions`);
      dispatch(setTransactions(data));
    } catch (err) {
      dispatch(setError(err));
    } finally {
      dispatch(isLoading(false));
    }
  };
};

export const createTransaction = async ({ amount, itemId }) => {
  try {
    await axios.post(`${baseURL}/transactions/${itemId}`, { amount });
    return { success: "Success buy item" };
  } catch (err) {
    return { err: err.message };
  }
};

export const deleteTransaction = async (id) => {
  try {
    const { data } = await axios.delete(`${baseURL}/transactions/${id}`);
    return { success: data.message };
  } catch (err) {
    return { err: err.message };
  }
};

export const updateTransaction = async (id) => {
  try {
    const { data } = await axios.patch(`${baseURL}/transactions/${id}`, {
      status: "paid",
    });
    return { success: data.message };
  } catch (err) {
    return { err: err.message };
  }
};
