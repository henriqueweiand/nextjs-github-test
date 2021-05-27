import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.github.com/",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_CLIENT_SECRET}`,
  },
});
