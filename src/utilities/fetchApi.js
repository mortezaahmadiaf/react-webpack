import axios from "axios";
// import { getToken } from './components/localStorage'
// import { decrypt } from './components/functions/Function'

export const server = "http://localhost:4000/";
const Fetch = async (url, method = "GET", data, header) => {
//   let token = getToken() ? decrypt(getToken()) : undefined
  let options = {
    baseURL: server,
    url,
    method,
    data: data ? data : {},
    responseType: "application/json",
    // withCredentials: true,
    // timeout: 500,
    // headers: { "swydd": token },
  };
  return await axios(options).then((res) => {
    return res.data
  })
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
  return await axios(options).then((res) => res.data)
};
export default Fetch;
