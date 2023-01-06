import axios from "axios";

const baseURL = process.env.REACT_APP_URL_API;
const port = process.env.REACT_APP_PORT;


const api = axios.create({
  baseURL: `${baseURL}:${port}`
});

export default api;
