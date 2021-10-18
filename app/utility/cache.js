import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";

const asyncStorageStore = async (key, value) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    console.log(error);
  }
};

export default {
  asyncStorageStore,
};
