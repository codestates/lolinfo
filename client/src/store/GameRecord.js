import { createPromiseThunk } from "../lib/asyncUtils";

const GET_RECORD = "GET_RECORD";
const GET_RECORD_SUCCESS = "GET_RECORD_SUCCESS";
const GET_RECORD_ERROR = "GET_RECORD_ERROR";
const GET_RECORD_INITIAL = "GET_RECORD_INITIAL";

export const getRecord = createPromiseThunk(GET_RECORD);
export const getRecordInitial = () => ({ type: GET_RECORD_INITIAL });

const initState = {
  payload: {
    loading: false,
    payload: null,
    error: null,
  },
};

export default function gameRecord(state = initState, action) {
  switch (action.type) {
    case GET_RECORD:
      return {
        ...state,
        loading: true,
        payload: null,
        error: false,
        errorMsg: null,
      };
    case GET_RECORD_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
        error: false,
        errorMsg: null,
      };
    case GET_RECORD_ERROR:
      return {
        ...state,
        loading: false,
        payload: null,
        error: true,
        errorMsg: action.errorMsg,
      };
    case GET_RECORD_INITIAL:
      return {
        ...state,
        loading: false,
        payload: null,
        error: false,
        errorMsg: null,
      };
    default:
      return state;
  }
}
