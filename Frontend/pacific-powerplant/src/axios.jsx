import axios from "axios";
axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: "https://pacific-powerplant.onrender.com/api",
});

export default instance;
