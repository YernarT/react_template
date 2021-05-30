import { myPythonApiInstance as myPythonApi } from "@api/ajax";

export const reqLog = (data) =>
  myPythonApi.post("auth/login/", data);
export const reqReg = (data) =>
  myPythonApi.post("auth/registration/", data);
