import React, { useState, useEffect } from "react";
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
import NetInfo from "@react-native-community/netinfo";

export default function App() {
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

  NetInfo.addEventListener((netinfo) => console.log(netinfo));

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      {/*       <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer> */}
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
