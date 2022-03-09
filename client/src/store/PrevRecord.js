const SET_PREV_RECORD = "SET_PREV_RECORD";

export const setPrevRecord = (prevRecord) => ({ type: SET_PREV_RECORD, prevRecord });

const initState = {
  prevRecord: null,
};

export default function prevRecord(state = initState, action) {
  switch (action.type) {
    case SET_PREV_RECORD:
      return {
        ...state,
        prevRecord: action.prevRecord,
      };
    default:
      return state;
  }
}
