import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import Reducers from "../reducers/reducers.js";

const middleware = applyMiddleware(logger, thunk);

const Store = createStore(Reducers, middleware);

export default Store;
