import axios from "axios";

export const server = "http://";
const Fetch = async (url, method = "GET", data, header) => {
  let options = {
    baseURL: server,
    url,
    method,
    data: data ? data : {},
    responseType: "application/json",

    // headers: { "swydd": token },
  };
  return await axios(options).then((res) => {
    return res.data;
  });
};

export const uploadFile = async (url, method = "GET", data, header) => {
  let options = {
    baseURL: server,
    url,
    method,
    data: data ? data : {},
    responseType: "json",
    timeout: 500,
    // headers: { "short-task": getToken() ? getToken() : '', ...header },
  };
  return await axios(options).then((res) => res.data);
};
export default Fetch;
