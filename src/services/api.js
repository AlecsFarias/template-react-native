import axios from "axios";

const api = axios.create({
  //baseURL: "http://192.168.0.100:4500/",
  baseURL: "http://192.168.15.4:4500/",
  // baseURL: "https://rh-backend.herokuapp.com",
  //baseURL: "https://puntook-core-api.herokuapp.com/",
});

export default api;
