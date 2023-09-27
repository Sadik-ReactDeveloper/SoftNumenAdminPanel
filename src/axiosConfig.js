import axios from "axios";

const instance = axios.create({
  // baseURL: "http://3.6.37.16:8000",
  baseURL: "http://3.7.55.231:5000",
  // baseURL: "https://invoice-o.com/Infinity/api/ApiCommonController",
});

export default instance;
