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
import { NavigationContainer } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import decode from "jwt-decode";

import OfflineStatus from "./app/components/OfflineStatus";
import AuthNavigator from "./app/navigation/AuthNavigator";
import { AuthContext } from "./app/components/context/authContext";
import {
  getAuthTokenFromStore,
  getuserAuthFromStore,
  removeuserAuthFromStore,
  removeuserTokenFromStore,
} from "./app/utility/storage";
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
    console.log(user);
  }, []);

  const getUserAuth = async () => {
    const token = await getAuthTokenFromStore();
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        setUser(null);
        removeuserAuthFromStore();
        removeuserTokenFromStore();
        console.log("hey there");
      }
      return;
    }

    const userAuth = await getuserAuthFromStore();

    if (!userAuth) return;

    setUser(JSON.parse(userAuth));
    console.log(JSON.parse(userAuth).email);
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
