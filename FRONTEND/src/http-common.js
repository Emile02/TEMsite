// https-common.js

import axios from "axios";
import store from '../store';


const http = axios.create({
  baseURL: "http://localhost:8081/api",
  headers: {
    "Content-type": "application/json",
  }
});

http.interceptors.request.use(
  function(config) {
    const token = store.getters.getToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default http;

