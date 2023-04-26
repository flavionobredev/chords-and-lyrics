import axios from "axios";
export const api = axios.create({
  baseURL: `http://localhost:${
    import.meta.env.VITE_FUNCTIONS_PORT || 9000
  }/.netlify/functions`,
  headers: {
    "Content-Type": "application/json",
  },
});
