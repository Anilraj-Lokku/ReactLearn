import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./cake/cakeReducer";

const rootReducer = combineReducers({
  reducer1: cakeReducer,
  reducer2: iceCreamReducer,
});

export default rootReducer;
