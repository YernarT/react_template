import axios from "axios";
import { message } from "antd";

import reduxStore from "@redux/store";
import { changeFullScreenLoadingAction } from "@redux/actions";


const dataApiInstance = axios.create({
  baseURL: "/data-api",
});

dataApiInstance.interceptors.request.use((config) => {
  const state = reduxStore.getState();

  reduxStore.dispatch(changeFullScreenLoadingAction(true));
  config.headers["Authorization"] =
    "Bearer " + state.user.jwt;

  return config;
});

dataApiInstance.interceptors.response.use(
  (res) => {
    reduxStore.dispatch(
      changeFullScreenLoadingAction(false)
    );

    return res;
  },
  (err) => {
    reduxStore.dispatch(
      changeFullScreenLoadingAction(false)
    );

    if (axios.isCancel(err)) {
      console.log("请求取消的错误");
      // 中断promise链
      return new Promise(() => {});
    } else {
      console.log("请求错误");
      message.error("Error");

      // return Promise.reject(err);
      // 中断promise链
      return new Promise(() => {});
    }
  }
);

export function get(url, params) {
  return dataApiInstance.get(url, {
    params,
  });
}

export function post(url, data) {
  return dataApiInstance.post(url, {
    data,
  });
}

export function put(url, data) {
  return dataApiInstance.get(url, {
    data,
  });
}

export function del(url) {
  return dataApiInstance.delete(url);
}
