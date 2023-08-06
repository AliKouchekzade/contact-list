import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export const getAllContactHttp = () => http.get("/contacts");

export const getIDContactHttp = (id) => http.get(`/contacts/${id}`);

export const addNewContactHttp = (newCon) => http.post("/contacts", newCon);

export const deleteIDContactHttp = (id) => http.delete(`/contacts/${id}`);

export const updateIDContactHttp = (id, up) => http.put(`/contacts/${id}`, up);

export default http;
