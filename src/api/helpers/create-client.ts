import axios from "axios";
export const createClient = (resource: string = "") => {
  const baseUrl =
    import.meta.env.NODE_ENV === "production" ? "" : "http://localhost:9000";
  console.log(process.env);

  return axios.create({
    baseURL: `${baseUrl}/.netlify/functions/${resource}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export type Client = ReturnType<typeof createClient>;
