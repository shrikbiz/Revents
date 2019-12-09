import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from "../reducers/rootReducer";

export const configureStore = () => {
  const store = createStore(rootReducers, devToolsEnhancer());
  return store;
};
