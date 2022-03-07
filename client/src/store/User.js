import { createPromiseThunk, reducerUtils } from "../lib/asyncUtils";

const GET_USER = "GET_USER";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_ERROR = "GET_USER_ERROR";

export const getUser = createPromiseThunk(GET_USER);

const initState = {
  data: reducerUtils.initial(),
};

export default function user(state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        data: reducerUtils.initial(),
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: reducerUtils.success(action.payload),
      };
    case GET_USER_ERROR:
      return {
        ...state,
        data: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}
