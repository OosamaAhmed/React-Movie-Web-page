
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import CompineReduser from "./Reduser/CompineReduser";

const mystore = createStore(CompineReduser, composeWithDevTools())


export default mystore