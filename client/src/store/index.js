import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import user from "./User";
import prevRecord from "./PrevRecord";
import gameRecord from "./GameRecord";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // auth, board, studio 3개의 reducer 중에 auth reducer만 localstorage에 저장합니다.
  whitelist: ["user"],
  // blacklist -> 그것만 제외합니다
};

const rootReducer = combineReducers({
  user,
  prevRecord,
  gameRecord,
});

export default persistReducer(persistConfig, rootReducer);
