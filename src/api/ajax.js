import axios from "axios";

import reduxStore from "@redux/store";

import { message } from "antd";

export const myPythonApiInstance = axios.create({
  baseURL: "my-python-api",
});

// 请求拦截器
myPythonApiInstance.interceptors.request.use((config) => {
  const state = reduxStore.getState();

  config.headers["Authorization"] = state.user.jwt
    ? "Bearer " + state.user.jwt
    : "";

  return config;
});

// 响应拦截器
myPythonApiInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (axios.isCancel(err)) {
      // 中断Promise链
      return new Promise(() => {});
    } else {
      if (
        err.response.status >= 504 &&
        err.response.status < 600
      ) {
        message.error(
          "server is down, please try again later"
        );
        // 中断Promise链
        return new Promise(() => {});
      }

      return Promise.reject(err.response.data);
    }
  }
);
