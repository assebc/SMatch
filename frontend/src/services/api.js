import axios from "axios";

const api = axios.create({
  baseURL: "https://flask-production-66e9.up.railway.app/",
});

export default api;