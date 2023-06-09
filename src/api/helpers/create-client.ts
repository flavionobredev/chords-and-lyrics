import axios from "axios";
export const createClient = (resource: string = "") => {
  const baseUrl = import.meta.env.PROD ? "" : "http://localhost:9000";
  console.log(import.meta.env);

  return axios.create({
    baseURL: `${baseUrl}/.netlify/functions/${resource}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export type Client = ReturnType<typeof createClient>;
