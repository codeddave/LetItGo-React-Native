import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Status,
  Button,
  Platform,
  StatusBar,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { NavigationContainer, useNavigation } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AppNavigator from "./app/navigation/AppNavigator";

import { AsyncStorage } from "@react-native-async-storage/async-storage";
import OfflineStatus from "./app/components/OfflineStatus";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomScreen from "./app/screens/WelcomeScreen";
import AuthNavigator from "./app/navigation/AuthNavigator";
import {
  AuthContext,
  AuthContextProvider,
} from "./app/components/context/authContext";
import { getuserAuthFromStore } from "./app/utility/storage";
import AppLoading from "expo-app-loading";
export default function App() {
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);
  /*  const [category, setCategory] = useState(categories[0]);
  const [imageUris, setImageUris] = useState([]);
  const [firstName, setFirstName] = useState("");
  const { landscape } = useDeviceOrientation(); */
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();

    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  const netInfo = useNetInfo();

  const demo = async () => {
    try {
      await AsyncStorage.setItem("person", JSON.stringify({ id: 12 }));
      const value = await AsyncStorage.getItem("person");
      const person = JSON.parse(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserAuth = async () => {
    const userAuth = await getuserAuthFromStore();
    console.log(userAuth);
    if (!userAuth) return;

    setUser(JSON.parse(userAuth));
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={getUserAuth}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <OfflineStatus />
        <View
          style={{
            paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
            flex: 1,
          }}
        >
          <NavigationContainer theme={navigationTheme}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </View>
      </AuthContext.Provider>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
