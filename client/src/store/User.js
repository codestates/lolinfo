const GET_USER = "GET_USER";
const GET_USER_LOGINED_INFO = "GET_USER_LOGINED_INFO";
const GET_USER_ERROR = "GET_USER_ERROR";

export const setUserLoginedInfo = (payload) => ({ type: GET_USER_LOGINED_INFO, payload });

let defaultUserInfo = {
  accessToken: "",
  createdAt: "",
  email: "",
  id: "",
  isLogined: false,
  name: "",
  userImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3kiVpzQisF4m8TU_1jv9xFho9z2g-XRyMKg&usqp=CAU",
};

const initState = {
  payload: defaultUserInfo,
  error: null,
};

export default function user(state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        payload: null,
        error: null,
      };
    case GET_USER_LOGINED_INFO:
      return {
        ...state,
        payload: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
