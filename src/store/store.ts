import { createStore, applyMiddleware, compose } from "redux";

import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export type RootState = ReturnType<typeof rootReducer>;

export default store;
