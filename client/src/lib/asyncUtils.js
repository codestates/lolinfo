import axios from "axios";
export const createPromiseThunk = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      const creAxios = axios.create({
        withCredentials: true,
      });
      const url = "";
      const payload = await creAxios.post(url, param);
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
    data: payload,
    error: null,
  }),

  error: (error) => ({
    loading: false,
    data: null,
    error: error,
  }),
};
