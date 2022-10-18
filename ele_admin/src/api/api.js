import axios from "axios";
import { Message, MessageBox } from "element-ui";

let service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
});

service.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
