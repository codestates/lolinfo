import { createPromiseThunk, reducerUtils } from "../lib/asyncUtils";

const GET_PROFILE = "GET_PROFILE";
const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS";
const GET_PROFILE_ERROR = "GET_PROFILE_ERROR";

export const getProfile = createPromiseThunk(GET_PROFILE);

const initState = {
  data: reducerUtils.initial(),
};

export default function gameProfile(state = initState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        data: reducerUtils.loading(),
      };
    case GET_PROFILE_SUCCESS:
      // console.log(action.type, action);
      return {
        ...state,
        data: reducerUtils.success(action.payload),
      };
    case GET_PROFILE_ERROR:
      return {
        ...state,
        data: reducerUtils.error(action.error),
      };
    default:
      return state;
  }
}
