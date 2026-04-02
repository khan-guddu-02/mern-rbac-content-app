import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

//Automatically token attach hoga
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});


//AUTH API 

export const registerUser = (data) => {
  return API.post("/auth/register", data);
};

export const loginUser = (data) => {
  return API.post("/auth/login", data);
};


//CONTENT APIs

export const getAllContent = () => {
  return API.get("/content");
};

export const getSingleContent = (id) => {
  return API.get(`/content/${id}`);
};

export const createContent = (data) => {
  return API.post("/content", data);
};

export const updateContent = (id, data) => {
  return API.put(`/content/${id}`, data);
};

export const deleteContent = (id) => {
  return API.delete(`/content/${id}`);
};

export default API;