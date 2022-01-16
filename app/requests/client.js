import axios from "axios";
import { BASE_URL } from "@env";

const config = {
  baseURL: BASE_URL,
};
const httpClient = axios.create(config);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { httpClient };
