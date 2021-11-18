import { create } from "apisauce";
import cache from "../utility/cache";
/* const apiClient = create({
  baseURL: "https://fakestoreapi.com",
}); */

const apiClient = create({
  baseURL: "http://localhost:5500",
});
const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  if (response.ok) {
    cache.asyncStorageStore(url, response.data);
    return response;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
