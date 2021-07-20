import React from "react";
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
  StatusBar
} from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card"
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen"
import MessagesScreen from "./app/screens/MessagesScreen"
import AccountScreen from "./app/screens/AccountScreen"




export default function App() {
  const { landscape } = useDeviceOrientation();
  return (
    <View style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
      flex: 1
    }}>
    
      <AccountScreen/>
    </View> 
  
  )

const styles = StyleSheet.create({
  background: {
    flex: 1,
    
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
}