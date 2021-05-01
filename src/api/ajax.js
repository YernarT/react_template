import axios from "axios";

export default function ajax(url, data = {}, method = "GET", jwt = null) {
  const BASE_URL = "/api/";

  if (method === "GET") {
    let paramStr = "";
    Object.keys(data).forEach((key) => {
      paramStr += key + "=" + data[key] + "&";
    });

    if (paramStr) paramStr = paramStr.slice(0, paramStr.length - 1);

    return axios.get(BASE_URL + url + "?" + paramStr, {
      headers: { Authorization: jwt ? "Bearer " + jwt : "" },
    });
  }

  if (method === "POST") {
    return axios.post(BASE_URL + url, data, {
      headers: { Authorization: jwt ? "Bearer " + jwt : "" },
    });
  }
}
