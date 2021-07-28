import axios from "axios";

import { useSelector } from "react-redux";

import { message } from "antd";

export const myPythonApiInstance = axios.create({
  baseURL: "my-python-api",
});

// 请求拦截器
myPythonApiInstance.interceptors.request.use((config) => {
  const {
    user: { jwt },
  } = useSelector((state) => state);

  config.headers["Authorization"] = jwt
    ? "Bearer " + jwt
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
