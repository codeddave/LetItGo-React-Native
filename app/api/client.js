import { create } from "apisauce";
import cache from "../utility/cache";
const apiClient = create({
  baseURL: "https://fakestoreapi.com",
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.asyncStorageStore(url, response.data);
  }
};

export default apiClient;
