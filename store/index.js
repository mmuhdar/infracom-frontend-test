import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import itemReducer from "./item/reducer";
import transactionReducer from "./transaction/reducer";
import { logger } from "../middlewares/logger";

let composeEnhancers = compose;
if (typeof window !== "undefined") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
  combineReducers({
    item: itemReducer,
    transaction: transactionReducer,
  }),
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
