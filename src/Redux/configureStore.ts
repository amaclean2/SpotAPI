import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
// import { createLogger } from 'redux-logger'
import rootReducer from "./Reducers";

// const loggerMiddleware = createLogger()

const configureStore: Function = (preloadedState: any) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
};

export default configureStore;
