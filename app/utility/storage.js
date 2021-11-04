import * as SecureStore from "expo-secure-store";

const key = "userAuth";

export const saveuserAuthToStore = async (userAuth) => {
  try {
    const item = JSON.stringify(userAuth);
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
