import axios from "axios";

// This should be in .env, but as is public, i will keep it here for others to use
const apiClient = axios.create({
  baseURL: "https://api.api-onepiece.com/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
