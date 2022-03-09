import { combineReducers } from "redux";
import user from "./User";
import prevRecord from "./PrevRecord";
import gameRecord from "./GameRecord";

const rootReducer = combineReducers({
  user,
  prevRecord,
  gameRecord,
});

export default rootReducer;
