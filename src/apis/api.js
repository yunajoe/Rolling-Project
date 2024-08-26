import { apiConfig } from "./apiConfig";

const BASE_URL = apiConfig.baseUrl;

const requestAPI = async ({ endpoint, option }) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, option);
  const result = await response.json();
  return { response, result };
};

export default requestAPI;
