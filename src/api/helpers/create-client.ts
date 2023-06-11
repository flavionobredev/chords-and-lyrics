import axios from "axios";
export const createClient = (data?: any) => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export type Client = ReturnType<typeof createClient>;
