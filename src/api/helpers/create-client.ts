import axios from "axios";
export const createClient = (resource: string = "") => {
  return axios.create({
    baseURL: `http://localhost:${
      import.meta.env.VITE_FUNCTIONS_PORT || 9000
    }/.netlify/functions/${resource}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export type Client = ReturnType<typeof createClient>;
