import { get } from "@api/ajax";

export const testAjax = () => get("/test-api");


// 用法:
// 1.
//  sendGetRequest = async () => {
//  const responseData = await testAjax();
//  console.log(responseData);
// 
//  console.log("request success")
// 
// 2.
//  sendGetRequest = () => {
//  testAjax().then(res => { console.log(res); }
