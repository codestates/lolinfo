import { createPromiseThunk, reducerUtils } from "../lib/asyncUtils";

const GET_RECORD = "GET_RECORD";
const GET_RECORD_SUCCESS = "GET_RECORD_SUCCESS";
const GET_RECORD_ERROR = "GET_RECORD_ERROR";

export const getRecord = createPromiseThunk(GET_RECORD);

const initState = {
  data: reducerUtils.initial(),
};

export default function gameRecord(state = initState, action) {
  switch (action.type) {
    case GET_RECORD:
      return {
        ...state,
        data: reducerUtils.initial(),
      };
    case GET_RECORD_SUCCESS:
      return {
        ...state,
        data: reducerUtils.success(action.payload),
      };
    case GET_RECORD_ERROR:
      return {
        ...state,
        data: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}
