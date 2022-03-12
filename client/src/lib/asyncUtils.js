import axios from "axios";
import { extractSkillIcon } from "../resource/RecordPagehelp";

export const createPromiseThunk = (type) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return (method, url, param) => async (dispatch) => {
    dispatch({ type, param });

    try {
      const creAxios = axios.create({ withCredentials: false });
      let resData = null;
      url = url + param;
      // console.log("url", url);

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

      const rune = await extractSkillIcon("12.4.1", resData.data, param);
      // console.log(rune);

      resData.data["rune"] = rune;
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
