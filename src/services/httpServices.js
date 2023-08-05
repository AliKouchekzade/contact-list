import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export const getAllContactHttp = () => http.get("/contacts");

export const addNewContactHttp = (newContact) =>
  http.post("/contacts", newContact);

export default http;
