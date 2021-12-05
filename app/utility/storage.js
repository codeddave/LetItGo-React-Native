import * as SecureStore from "expo-secure-store";

const key = "userAuth";
const tokenKey = "authToken";

export const saveAuthTokenToStore = async (token) => {
  try {
    // const item = JSON.stringify(user);
    await SecureStore.setItemAsync(tokenKey, token);
  } catch (error) {
    console.log("error getting auth token", error);
  }
};
export const getAuthTokenFromStore = async () => {
  try {
    // console.log(await SecureStore.getItemAsync(tokenKey));
    return await SecureStore.getItemAsync(tokenKey);
  } catch (error) {
    console.log(error);
  }
};
export const saveuserAuthToStore = async (user) => {
  try {
    const item = JSON.stringify(user);
    await SecureStore.setItemAsync(key, item);
  } catch (error) {
    console.log("error getting auth token", error);
  }
};

export const getuserAuthFromStore = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log(error);
  }
};

export const removeuserAuthFromStore = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("error removing authToken", error);
  }
};
export const removeuserTokenFromStore = async () => {
  try {
    await SecureStore.deleteItemAsync(tokenKey);
  } catch (error) {
    console.log("error removing Token", error);
  }
};
