import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FeedNavigator from "./FeedNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import useAuth from "../components/hooks/useAuth";
import useNotification from "../components/hooks/useNotification";
import navigation from "../navigation/rootNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const handleNotificationRecieved = (notifications) => {
    console.log(notifications, "this is the notif");
    alert(notifications);
    navigation.navigate(" Account" /*  { screen: 'Profile' } */);
  };
  const handleNotificationClicked = (notifications) => {
    navigation.navigate(" Account" /*  { screen: 'Profile' } */);
  };

  useNotification(handleNotificationRecieved, handleNotificationClicked);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ListingsEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingsEdit")}
            />
          ),
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tab.Screen
        name=" Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
