import axios from "axios";

import reduxStore from "@redux/redux-store";

import { message } from "antd";

export const myPythonApiInstance = axios.create({
  baseURL: "my-python-api",
  validateStatus: (status) => status >= 200 && status < 300,
});

// Request interceptor
myPythonApiInstance.interceptors.request.use((config) => {
  const {
    user: { jwt },
  } = reduxStore.getState();

  if (jwt) {
    config.headers["Authorization"] = "Bearer " + jwt;
  }

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
    }

    if (err.response && err.response.status) {
      switch (err.response.status) {
        case 500:
          message.error(
            "server is down, please try again later"
          );
          return Promise.reject({ err: 500 });
        case 404:
          message.error(
            "client error, please wait for repair"
          );
          return Promise.reject({ err: 404 });
        default:
          return Promise.reject(err);
      }
    }

    if (err.response === undefined) {
      message.error(
        "server is down, please try again later"
      );

      return Promise.reject({ err: 500 });
    }

    return Promise.reject(err);
  }
);
