import { combineReducers } from "redux";
import user from "./User";
import gameProfile from "./GameProfile";
import gameRecord from "./GameRecord";

const rootReducer = combineReducers({
  user,
  gameProfile,
  gameRecord,
});

export default rootReducer;
