import { combineReducers, createStore } from "redux";
import dataReducer from "./data-reducer";

let reducers = combineReducers({
  data: dataReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
