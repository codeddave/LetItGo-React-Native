import { create } from "apisauce";
/* const apiClient = create({
  baseURL: "https://wander-lust-mern.herokuapp.com",
});
 */
const apiClient = create({
  baseURL: "https://let-itgo.herokuapp.com",
});
export const logIn = async (loginData) => {
  return apiClient.post("/user/signin", loginData);
};

export const register = async (registerData) => {
  return apiClient.post("/user/signup", registerData);
};

export const forgotPassword = async (email) => {
  return apiClient.post("/user/forgot-password", { email });
};
