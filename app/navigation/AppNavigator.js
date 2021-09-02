import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedNavigator} options={{
        headerShown: false,
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color} />
      }} />
      <Tab.Screen name="ListingsEdit" component={ListingEditScreen} options= {({navigation})=>({
        tabBarButton: () => <NewListingButton onPress={()=> navigation.navigate("ListingsEdit") }/>,
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
      })} />
      <Tab.Screen name="Account" component={AccountNavigator} options={{
        tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="account" size={size} color={color} />
      }}  />
    </Tab.Navigator>
  );
};

export default AppNavigator;
