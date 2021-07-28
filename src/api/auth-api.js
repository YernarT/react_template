import { myPythonApiInstance as myPythonApi } from "@api/ajax";

// Login
export const reqLog = (data) =>
  myPythonApi.post("auth/login/", data);

// Register
export const reqReg = (data) =>
  myPythonApi.post("auth/registration/", data);
