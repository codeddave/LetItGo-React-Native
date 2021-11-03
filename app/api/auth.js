import { create } from "apisauce";
const apiClient = create({
  baseURL: "https://wander-lust-mern.herokuapp.com",
});

export const logIn = async (loginData) => {
  return apiClient.post("/user/signin", loginData);
};
