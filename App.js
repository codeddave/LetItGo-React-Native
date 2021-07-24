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
import AppTextInput from "./app/components/AppTextInput"
import AppPicker from "./app/components/AppPicker"


const categories= [
  {
    label: "Furniture", 
    value: 1
  }, 
    {
    label: "Clothing", 
    value: 2
  }, 
    {
    label: "Furniture", 
    value: 3
  }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])
  const [firstName, setFirstName] = useState('')
  const { landscape } = useDeviceOrientation();
  return (
    <View style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 ,
      flex: 1
    }}>
    
    <AppPicker selectedItem={category} onSelectItem={item => setCategory(item)} items={categories} icon="apps" placeholder="Categories"/>
    <AppTextInput placeholder="Hello there" icon="email"/>

    </View> 
  
  )

const styles = StyleSheet.create({
  background: {
    flex: 1,
    
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});
}