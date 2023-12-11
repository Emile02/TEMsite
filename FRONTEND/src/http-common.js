// https-common.js

import axios from "axios";
import store from '../store';


const http = axios.create({
  baseURL: "https://tembackend.azurewebsites.net/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "https://drdh.fr",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Credentials": true
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

