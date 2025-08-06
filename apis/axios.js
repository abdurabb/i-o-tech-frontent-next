import axios from "axios";
import { toast } from "react-toastify";


const BASE_URL = "http://localhost:1337/api";
export const IMAGE_BASE_URL = "http://localhost:1337";


//192.168.29.22
export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleApiError = (error) => {
  if (error.response) {
    console.error("Data:", error.response.data?.error);
    console.error("Status:", error.response.status);
    console.error("Headers:", error.response.headers);

    toast?.error(error.response.data?.error);
  }
};



export const apiService = {
  async get(endpoint) {
    try {
      const response = await api.get(endpoint);
      return response.data;
    } catch (error) {
      handleApiError(error);
      throw error;
    }
  },
};

// export default { api, BASE_URL };
