import { get } from "@api/ajax";

// Auth
export const reqLog = (data) => post("auth/login/", data);
export const reqReg = (data) =>
  post("auth/registration/", data);



// 用法:
// 1.
//  sendGetRequest = async () => {
//  const responseData = await reqLog({username: "xxx", password: "yyy"});
//  console.log(responseData);
// 
//  console.log("request success")
// 
// 2.
//  sendGetRequest = () => {
//  reqLog({username: "xxx", password: "yyy"})
// .then(res => { console.log(res); })
// .catch(err => { console.log(err) });

// }
