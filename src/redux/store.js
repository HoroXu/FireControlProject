import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
import * as pageProps from "./Page/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    ...pageProps,
  })
  // composeEnhancers(applyMiddleware())
);

export default store;
