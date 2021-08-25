import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Status,
  Button,
  Alert,
  SafeAreaView,
  Platform,
  Image,
  Dimensions,
  StatusBar,
  TextInput,
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";

import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import ImageInput from "./app/components/ImageInput";
import ImageInputList from "./app/components/ImageInputList";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
const categories = [
  {
    label: "Furniture",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Furniture",
    value: 3,
  },
];

const Tweets = () => <Text>Tweets</Text>;

const TweetDetails = () => <Text>Tweet Details</Text>;

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen name="TweetsDetails" component={TweetDetails} />
  </Stack.Navigator>
);
export default function App() {
  const [category, setCategory] = useState(categories[0]);
  const [imageUris, setImageUris] = useState([]);
  const [firstName, setFirstName] = useState("");
  const { landscape } = useDeviceOrientation();
  const requestPermission = async () => {
    const result = await ImagePicker.requestCameraPermissionsAsync();

    if (!result.granted) {
      alert("You need to enable permission to access the library");
    }
  };
  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,

    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
