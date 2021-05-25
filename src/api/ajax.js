import axios from "axios";

import reduxStore from "@redux/store";

import { message } from "antd";

const apiInstance = axios.create({
  // baseURL: "/api/",
  baseURL: "https://your-api.com/",
});

apiInstance.interceptors.request.use((config) => {
  const state = reduxStore.getState();

  config.headers["Authorization"] = state.user.jwt
    ? "Bearer " + state.user.jwt
    : "";

  return config;
});

apiInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (axios.isCancel(err)) {
      console.log("请求取消的错误");
      // 中断promise链
      return new Promise(() => {});
    } else {
      if (
        err.response.status >= 504 &&
        err.response.status < 600
      ) {
        message.error(
          "Сервер не работает, повторите попытку позже"
        );
        // 中断promise链
        return new Promise(() => {});
      }

      return Promise.reject(err.response.data);
    }
  }
);

export function get(url, params) {
  return apiInstance.get(url, {
    ...params,
  });
}

export function post(url, data) {
  return apiInstance.post(url, {
    ...data,
  });
}

export function put(url, data) {
  return apiInstance.get(url, {
    ...data,
  });
}

export function del(url) {
  return apiInstance.delete(url);
}
