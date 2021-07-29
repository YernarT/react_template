import axios from "axios";

import { useSelector } from "react-redux";

import { message } from "antd";

export const myPythonApiInstance = axios.create({
  baseURL: "my-python-api",
});

// Request interceptor
myPythonApiInstance.interceptors.request.use((config) => {
  const {
    user: { jwt },
  } = useSelector((state) => state);

  config.headers["Authorization"] = jwt
    ? "Bearer " + jwt
    : "";

  return config;
});

// Response interceptor
myPythonApiInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    if (axios.isCancel(err)) {
      // Interrupt the Promise chain
      return new Promise(() => {});
    } else {
      if (
        err.response.status >= 504 &&
        err.response.status < 600
      ) {
        message.error(
          "server is down, please try again later"
        );
        // Interrupt the Promise chain
        return new Promise(() => {});
      }

      return Promise.reject(err.response.data);
    }
  }
);
