import LoginUpdate from "./loggercheck";
import insertBook from "./insertbooks";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  booklist: insertBook,
  isloggedin: LoginUpdate,
});

export default allReducer;
