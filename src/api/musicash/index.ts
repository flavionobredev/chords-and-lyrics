import axios from "axios";
export const MusicashClient = (data?: any) => {
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 2500,
  });
};

export type MusicashClient = ReturnType<typeof MusicashClient>;
