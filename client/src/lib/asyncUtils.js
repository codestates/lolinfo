import axios from "axios";

export const createPromiseThunk = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (method, url, param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      const creAxios = axios.create({ withCredentials: false });
      let resData = null;
      url = url + param;

      console.log("url", url);

      switch (method) {
        case "get": {
          resData = await creAxios.get(url);
          break;
        }
        case "post": {
          resData = await creAxios.post(url, param);
          break;
        }
        default: {
          resData = await creAxios.get(url);
          break;
        }
      }

      console.log("썽크", { type: SUCCESS, payload: resData.data });

      dispatch({ type: SUCCESS, payload: resData.data });
    } catch (e) {
      console.log("썽크에러", { type: ERROR, e });
      dispatch({ type: ERROR, errorMsg: e });
    }
  };
};

export const reducerUtils = {
  initial: (initData = null) => ({
    loading: false,
    data: initData,
    error: null,
  }),

  loading: (prevState = null) => ({
    loading: true,
    payload: prevState,
    error: null,
  }),

  success: (payload) => ({
    loading: false,
    payload,
    error: null,
  }),

  error: (error) => ({
    loading: false,
    payload: null,
    error: error,
  }),
};
