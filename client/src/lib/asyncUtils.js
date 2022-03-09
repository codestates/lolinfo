import axios from "axios";
export const createPromiseThunk = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (method, url, param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      const creAxios = axios.create({ withCredentials: true });
      let resData = null;
      url = url + param;
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

      const { data: payload } = resData;
      // console.log("createPromiseThunk:", payload);

      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
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
    data: prevState,
    error: null,
  }),

  success: (payload) => ({
    loading: false,
    payload,
    error: null,
  }),

  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
