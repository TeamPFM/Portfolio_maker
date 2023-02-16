import axios from "axios";
import token from "../token";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: API_BASE_URL || "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const accessToken = token.getToken("token");

  return {
    ...config,
    headers: {
      Authorization: `login ${accessToken}`,
    },
  };
});

export default api;
