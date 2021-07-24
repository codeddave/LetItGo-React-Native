import React, {useState} from "react";
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
  TextInput
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
import ListingsScreen from "./app/screens/ListingsScreen"





export default function App() {
  const [firstName, setFirstName] = useState('')
  const { landscape } = useDeviceOrientation();
  return (
    <View style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
      flex: 1
    }}>
    
  <SafeAreaView>
      <TextInput onChangeText={text => setFirstName(text)}  placeholder="first Name" style={{ borderBottomColor: "#ccc", borderBottomWidth: 1}}/>
      <Text>{firstName}</Text>
</SafeAreaView>
    </View> 
  
  )

const styles = StyleSheet.create({
  background: {
    flex: 1,
    
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
}