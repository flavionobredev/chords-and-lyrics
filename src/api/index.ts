import axios from "axios";

export const api = axios.create({
  baseURL: `${import.meta.env.BASE_URL}/.netlify/functions`,
  headers: {
    "Content-Type": "application/json",
  },
});
